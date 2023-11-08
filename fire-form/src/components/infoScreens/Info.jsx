import React from "react";
import NextButton from "../buttons/NextButton";

const Info = ({ Info, children, nextStep}) => {
    
  return (
    <div className="flex flex-col items-center">
      <div className="pb-10 ">
        <h1 className="font-oswald text-4xl text-center py-8">{Info.title}</h1>
        <p className="font-sans text-center text-xl text-slate-600 dark:text-slate-500">{Info.description}</p>
      </div>
      {children}
      <NextButton
        nextStep={nextStep}
        text={Info.buttonText}
        color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        type="button"
        isDisabled={false}
      />
    </div>
  );
};

export default Info;