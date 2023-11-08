import { useFormikContext } from 'formik';

const TextArea = ({ name, placeholder, title, required, max, helpText}) => {
  const { handleChange, handleBlur, values, errors, touched } = useFormikContext();

  return (
    <div className="flex flex-col content-start pb-10">
      {title && <label className='text-4xl py-4' htmlFor={name}>{title}</label>}
      <small className="text-xl text-gray-600 pb-8">{helpText}</small>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        maxLength={max}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={`mt-8 focus:shadow-soft-primary-outline bg-slate-50
        dark:bg-slate-800 placeholder:text-black/80 
        text-black/80 text-sm leading-5.6 ease-soft block 
        w-full appearance-none rounded-lg  bg-clip-padding px-6
        py-4 font-normal text-gray-500 outline-none transition-all 
        placeholder:text-gray-500
        focus:outline-none`}></textarea>
      {errors[name] && touched[name] ? (
        <div className="text-red-500 text-sm">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextArea;