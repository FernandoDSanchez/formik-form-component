import { Formik, Form } from "formik";
import { schemaConstructor } from "../../validation/ContactInputSchema";
import Input from "./Inputs/Input";
import Select from "./Inputs/Select";
import TextArea from "./Inputs/TextArea";
import FileUpload from "./Inputs/FileUpload";
import DateInput from "./Inputs/DateInput";
import NextButton from "../buttons/NextButton";
import URLInput from "./Inputs/URLInput";
import { motion, AnimatePresence } from "framer-motion"

const GenerateInput = ({ formField }) => {
  switch (formField.type) {
    case "text":
      return <Input key={formField.name} {...formField} />;
    case "email":
      return<Input key={formField.name} {...formField} />;
    case "select":
      return <Select key={formField.name} {...formField} />;
    case "textarea":
      return <TextArea key={formField.name} {...formField} />;
    case "file":
      return <FileUpload key={formField.name} {...formField} />;
    case "date":
      return <DateInput key={formField.name} {...formField} />;
    case "url":
      return <URLInput key={formField.name} {...formField} />; // Add URLInput case
    default:
      return null;
  }
};
const InputField = ({
  formField,
  initialValues,
  nextStep,
  isLastStep,
  handleFormData,
}) => {
  const { name, type } = formField;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaConstructor(name, type)}
      onSubmit={(values, { setTouched }) => {
        if (!isLastStep) {
          // This will set the 'touched' state of the current field to false,
          // ensuring the 'isValid' state is also false until this field is touched.
          setTouched({ [formField.name]: false });
          nextStep();
        } else {
          nextStep();
          handleFormData(values);
        }
      }}
    >
      {({ isValid, dirty, values, touched }) => {
        return (
          <Form className="flex flex-col justify-center h-full">
            <AnimatePresence>
              {/* Unique key ensures that the component remounts when formField.type changes */}
              <motion.div
                key={formField.type}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                //exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                
                <GenerateInput formField={formField} value={values} />
              </motion.div>
            </AnimatePresence>
            <NextButton
              text="Ok"
              color="bg-violet-800"
              type="submit"
              isDisabled={
                !dirty ||
                !isValid ||
                (!touched[formField.name] && !values[formField.name])
              }
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default InputField;
