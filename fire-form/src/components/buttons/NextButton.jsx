import { motion } from "framer-motion";
const NextButton = ({
  nextStep,
  text,
  color,
  type,
  isDisabled,
  isLastStep,
}) => {
  const colorDisabled = "bg-slate-400";
  return (
    <div className="flex flex-col">
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={nextStep}
        className={`${!isDisabled ? color : colorDisabled} 
              whitespace-nowrap w-min px-4 py-4 
              rounded-lg text-white text-xl`}
        type={type}
        disabled={isDisabled} // Disable the button if isValid is false
      >
        {text}
      </motion.button>
    </div>
  );
};

export default NextButton;
