import { useFormikContext, Field, ErrorMessage } from "formik";

const Select = ({ title, name, placeholder, options, required, helpText, validated}) => {
  const requiredSign = required? '*' : '';
  const { errors, values } = useFormikContext();
  const isFilled = values[name] !== "";
  return (
    <div className="select-field pb-10 flex flex-col">
      <label htmlFor={name} className='text-4xl py-4'>{title} {requiredSign}</label>
            <small className='text-xl text-gray-600 pb-8'>{helpText}</small>
      <Field
        as="select"
        name={name}
        className={`my-4 px-6 py-4 bg-slate-50
        dark:bg-slate-800 w-full rounded-lg  outline-none 
        text-sm text-gray-300 placeholder:text-gray-500
        focus:outline-none dark:focus:bg-slate-600
        autofill:text-red-600
        valid:border 
        invalid:border invalid:border-pink-200 invalid:text-pink-500`}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
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

export default Select;
