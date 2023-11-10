import { motion } from "framer-motion";
import BackIcon from "../../icons/BackIcon";
const BackButton = ({ backStep }) => {
  return (
    <nav className="pb-10">
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={backStep}
        className=" rounded-md p-2 bg-slate-50 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 flex flex-row items-center justify-center text-center"
      >
        {" "}
        <BackIcon /> <p className="pl-1">Back</p>
      </motion.button>
    </nav>
  );
};

export default BackButton;
