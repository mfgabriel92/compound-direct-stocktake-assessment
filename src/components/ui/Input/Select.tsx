import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { selectInputVariants } from "../../../variants";
import { Option } from "./Option.tsx";

interface Props {
  values: number[];
  type?: "text" | "number";
  className?: string;
}

export function Select({ values, type = "text", className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomValue, setIsCustomValue] = useState(false);
  const [value, setValue] = useState<string | number | undefined>(values[0]);

  function toggleOpenClose() {
    setIsOpen(!isOpen);
    setIsCustomValue(isOpen);
  }

  function handleCustomValueInput(value: string) {
    const onlyNumbersRegex = /^\d*$/;
    if (onlyNumbersRegex.test(value)) {
      setValue(value);
      setIsCustomValue(!!value);
    }
  }

  function renderListOfValuesFromProps() {
    return values.map((v) => (
      <Option key={v} onClick={() => setValue(v)}>
        {`+${v}`}
      </Option>
    ));
  }

  function renderCustomInputValue() {
    return (
      <Option key={value} onClick={() => setValue(value)}>
        {`+${value}`}
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
        onChange={(e) => handleCustomValueInput(e.target.value)}
        onFocus={toggleOpenClose}
        onBlur={toggleOpenClose}
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
