import { useFormikContext } from "formik";
import { motion } from "framer-motion"
import { useState } from "react";
const TextArea = ({ name, placeholder, title, required, max, helpText }) => {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext();
    const [isFocused, setIsFocused] = useState(false);
const handleBlurEvent = () => {
  handleBlur();
  setIsFocused(false)
}
  return (
    
    <div className="flex flex-col content-start pb-10">
      {title && (
        <label className="text-4xl py-4" htmlFor={name}>
          {title}
        </label>
      )}
      <small className="text-xl text-gray-600 pb-8">{helpText}</small>
      <motion.div
        animate={{ scale: isFocused ? 1.01 : 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          maxLength={max}
          onChange={handleChange}
          value={values[name]}
          className={`my-4 px-6 py-4 bg-slate-50
        dark:bg-slate-800 w-full rounded-lg  outline-none 
        text-sm text-gray-500 placeholder:text-gray-500
        focus:outline-none dark:bg-slate-600
        autofill:text-red-600
        valid:border 
        invalid:border invalid:border-pink-200 invalid:text-pink-500`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => handleBlurEvent()}
        ></textarea>
      </motion.div>
      {errors[name] && touched[name] ? (
        <div className="text-red-500 text-sm">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
