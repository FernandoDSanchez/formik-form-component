import { useFormikContext, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion"
import { useState } from "react";
const DateInput = ({
  name,
  placeholder,
  title,
  helpText,
  required,
  validated,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { errors, values } = useFormikContext();
  const requiredSign = required ? "*" : "";
  const isFilled = values[name] !== "";
  return (
    <div className="flex flex-col content-start pb-10">
      <label htmlFor={name} className="text-4xl py-4">
        {title} {requiredSign}
      </label>
      <small className="text-xl text-gray-600 pb-8">{helpText}</small>
      <motion.div animate={{ scale: isFocused ? 1.01 : 1 }} transition={{ type: "spring", stiffness: 100 }}>
      <Field
        id={name}
        name={name}
        type="date"
        placeholder={placeholder}
        className={`my-4 px-6 py-4 bg-slate-50
        dark:bg-slate-800 w-full rounded-lg  outline-none 
        text-sm text-gray-500 placeholder:text-gray-500
        focus:outline-none dark:bg-slate-600
        autofill:text-red-600
        valid:border 
        invalid:border invalid:border-pink-200 invalid:text-pink-500`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      </motion.div>
      {errors[name] ? (
        <ErrorMessage name={name} />
      ) : (
        <span className="text-xl text-gray-400">
          {isFilled ? (
            validated
          ) : (
            <span className="text-xl invisible"> Errors and Helpers</span>
          )}
        </span>
      )}
    </div>
  );
};

export default DateInput;
