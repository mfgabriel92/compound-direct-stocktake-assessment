import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { selectInputVariants } from "../../../variants";
import { Option } from "./Option.tsx";

interface Props {
  values: number[];
  type?: "text" | "number";
  className?: string;
  onChange: (value: number) => void;
}

export function Select({ values, type = "text", className, onChange }: Props) {
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
      onChange(Number(value));
    }
  }

  function handleOptionSelect(value: number) {
    setValue(value);
    onChange(value);
  }

  function renderListOfValuesFromProps() {
    return values.map((value) => (
      <Option key={value} onClick={() => handleOptionSelect(value)}>
        {`+${value}`}
      </Option>
    ));
  }

  function renderCustomInputValue() {
    return (
      <Option key={value} onClick={() => handleOptionSelect(Number(value))}>
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
        "select-wrapper relative flex rounded-md border-[1px] border-gray-200/50 leading-none after:mr-4 after:mt-6 after:text-gray-200 after:content-['⌄'] has-[input:focus]:border-2 has-[input:focus]:border-blue-500",
        className,
      )}
    >
      <input
        type={type}
        className="my-2 mr-4 w-full border-r-[1px] border-gray-200 outline-none"
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
