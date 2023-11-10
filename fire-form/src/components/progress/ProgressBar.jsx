import React from 'react';
import { motion } from "framer-motion"

const ProgressBar = ({ totalSteps, currentStep }) => {
  // Calcula el porcentaje completado
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className=" w-full bg-slate-200 dark:bg-slate-900">
      <motion.div
        initial={{ width: 0 }} // Start animation from 0 width
        animate={{ width: `${percentage}%` }} // Animate to the current percentage width
        className="h-1 bg-violet-500" // Removed the inline width and the template literal in the class
        transition={{ type: "spring", stiffness: 100 }}
      />
    </div>
  );
};

export default ProgressBar;