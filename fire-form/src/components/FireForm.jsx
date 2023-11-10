"use client";
import React, { useState } from "react";
import Info from "./infoScreens/Info";
import BackButton from "./buttons/BackButton";
import InputField from "./Input/InputField";
import NavButton from "./buttons/NavButton";
import ProgressBar from "./progress/ProgressBar";
const FireForm = ({ formConfig, handleFormData }) => {
  const [step, setStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showThanks, setShowWThanks] = useState(false);
  const isLastStep = step === formConfig.inputs.length - 1;

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

  const generateInitialValues = (inputs) => {
    let initialValues = {};
    inputs.forEach((input) => {
      initialValues[input.name] = "";
    });
    return initialValues;
  };

  return (
    <>
    {showWelcome || showThanks? null : <ProgressBar totalSteps={formConfig.inputs.length} currentStep={step} ></ProgressBar>}
      <section className="mb-auto mt-auto p-4 flex flex-col h-full w-full max-w-3xl text-slate-900 dark:text-white  ">
        {showWelcome ? (
          formConfig.welcomePage ? (
            <Info Info={formConfig.welcomePage} nextStep={nextStep}></Info>
          ) : null
        ) : showThanks ? (
          formConfig.thanksPage ? (
            <Info Info={formConfig.thanksPage} nextStep={nextStep}>
              <NavButton
                text={formConfig.thanksPage.buttonText}
                href={formConfig.thanksPage.href}
              ></NavButton>
            </Info>
          ) : null
        ) : (
          <>
            {step >= 1 ? (
              <BackButton backStep={backStep} />
            ) : (
              <div className="invisible">
                <BackButton backStep={backStep} className="invisible" />
              </div>
            )}
            <InputField
              formField={formConfig.inputs[step]}
              initialValues={generateInitialValues(formConfig.inputs)}
              nextStep={nextStep}
              step={step}
              isLastStep={isLastStep}
              handleFormData={handleFormData}
            ></InputField>
          </>
        )}
      </section>
    </>
  );
};

export default FireForm;
