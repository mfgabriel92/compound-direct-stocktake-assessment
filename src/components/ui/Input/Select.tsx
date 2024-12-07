import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Option } from ".";
import { selectInputVariants } from "../../../variants";

interface Props {
  values: {
    value: string | number;
    label: string;
  }[];
  type?: "text" | "number";
  className?: string;
}

export function Select({ values, type = "text", className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomValue, setIsCustomValue] = useState(false);
  const [value, setValue] = useState<string | number | undefined>(undefined);

  function toggle() {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setIsCustomValue(false);
    }
  }

  function handleCustomValue(value: string | number) {
    setValue(value);
    setIsCustomValue(!!value);
  }

  function renderListOfValuesFromProps() {
    return values.map((v) => (
      <Option key={v.label} onClick={() => setValue(v.value)}>
        {v.label}
      </Option>
    ));
  }

  function renderCustomInputValue() {
    return (
      <Option key={value} onClick={() => setValue(value)}>
        {`+ ${value}`}
      </Option>
    );
  }

  function renderListOfValues() {
    if (!isCustomValue) {
      return renderListOfValuesFromProps();
    }

    return renderCustomInputValue();
  }

  return (
    <div
      className={clsx(
        "relative flex rounded-md border-[1px] border-gray-200/50 leading-none",
        className,
      )}
    >
      <input
        type={type}
        className="w-full"
        value={value}
        onChange={(e) => handleCustomValue(e.target.value)}
        onFocus={toggle}
        onBlur={toggle}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={selectInputVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[74px] z-10 flex w-full flex-col rounded-md border-[1px] border-gray-200/50 bg-white shadow-sm"
          >
            {renderListOfValues()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
