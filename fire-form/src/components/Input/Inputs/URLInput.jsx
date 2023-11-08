import { useFormikContext, Field, ErrorMessage } from 'formik';

const URLInput = ({ name, placeholder, title, helpText, required, validated }) => {
  const { errors, values } = useFormikContext();
  const requiredSign = required ? '*' : '';
  const isFilled = values[name] !== '';

  return (
    <div className="flex flex-col content-start pb-10">
      <label htmlFor={name} className='text-4xl py-4'>{title} {requiredSign}</label>
      <small className="text-xl text-gray-600 pb-8">{helpText}</small>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        className={`my-4 px-6 py-4 bg-slate-50
        dark:bg-slate-800 w-full rounded-lg  outline-none 
        text-sm text-gray-300 placeholder:text-gray-500
        focus:outline-none dark:focus:bg-slate-600
        autofill:text-red-600
        valid:border 
        invalid:border invalid:border-pink-200 invalid:text-pink-500`}
      />
      {errors[name] ? <ErrorMessage name={name} /> : <span>{isFilled ? validated : <b></b>}</span>}
    </div>
  );
};

export default URLInput;