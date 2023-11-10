
import { motion } from "framer-motion";
const NavButton = ({ text, href }) => {
  return (
    <nav className="pb-10">
      <a href={href}>
        <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }} className=" rounded-md p-2 bg-slate-50 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 flex flex-row items-center justify-center text-center">
          {text}
        </motion.button>
      </a>
    </nav>
  );
};

export default NavButton;
