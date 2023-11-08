"use client";
import React, { useState } from "react";
import Info from "./infoScreens/Info";
import NavButton from "./buttons/NavButton";
import InputField from "./Input/InputField";

const FireForm = ({ formConfig }) => {
  const [step, setStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showThanks, setShowWThanks] = useState(false);

  const nextStep = () => {
    if (showWelcome) {
      setShowWelcome(false);
    } else if (step < formConfig.inputs.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0);
      setShowWThanks(true);
    }
  };

  const backStep = () => {
    setStep(step - 1);
  };

  const isLastStep = step === formConfig.inputs.length - 1;

  const generateInitialValues = (inputs) => {
    let initialValues = {};
    inputs.forEach((input) => {
      initialValues[input.name] = "";
    });
    return initialValues;
  };

  return (
    <>
      <section className=" p-4 flex flex-col h-full w-full max-w-3xl text-slate-900 dark:text-white  ">
        {showWelcome ? (
          formConfig.welcomePage ? (
            <Info Info={formConfig.welcomePage} nextStep={nextStep}></Info>
          ) : null
        ) : showThanks ? (
          formConfig.thanksPage ? (
            <Info Info={formConfig.thanksPage} nextStep={nextStep}></Info>
          ) : null
        ) : (
          <>
            {step >= 1 ? (
              <NavButton backStep={backStep} />
            ) : (
              <div className="invisible">
                <NavButton backStep={backStep} className="invisible" />
              </div>
            )}
            <InputField
              formField={formConfig.inputs[step]}
              initialValues={generateInitialValues(formConfig.inputs)}
              nextStep={nextStep}
              step={step}
              isLastStep={isLastStep}
            ></InputField>
          </>
        )}
      </section>
    </>
  );
};

export default FireForm;
