import { useFormikContext, ErrorMessage } from "formik";
import ArrowIcon from "../../../icons/ArrowIcon";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
const FileUpload = ({
  name,
  title,
  placeholder,
  required,
  maxSize,
  accept,
  helpText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { setFieldValue, values } = useFormikContext();
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    // Si ya existe un valor de imagen y es un archivo, se actualiza el estado de imageSrc
    if (values[name] && values[name] instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // Set image URL
      };
      reader.readAsDataURL(values[name]);
    }
  }, [values, name]);
  const requiredSign = required ? "*" : "";
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      // This is an image file
      setFieldValue(name, file);
      console.log(values);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // Set image URL
      };
      reader.readAsDataURL(file);
    } else {
      // Not an image file
      console.warn("Uploaded file is not an image.");
      setImageSrc(null); // Reset image URL
    }
  };

  return (
    <div className="flex flex-col pb-10 h-full w-full">
      {values.profilePicture ? (
        <img
          src={imageSrc}
          alt="Preview"
          className="rounded-lg object-cover h-20 w-fit aspect-square"
        />
      ) : null}
      <span className="text-4xl py-4">
        {title} {requiredSign}
      </span>
      <small className="text-xl text-gray-600 pb-8">{helpText}</small>
      <motion.div animate={{ scale: isFocused ? 1.01 : 1 }} transition={{ type: "spring", stiffness: 100 }}>
      <label htmlFor={name} onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}>
        <div className="flex flex-col items-center justify-center pt-5 pb-6 border-4 border-dashed rounded-lg">
          <ArrowIcon />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id={name}
          name={name}
          type="file"
          placeholder={placeholder}
          required={required}
          max={maxSize}
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      </motion.div>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
};

export default FileUpload;
