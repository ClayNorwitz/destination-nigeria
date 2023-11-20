import React, { useContext, useEffect, useState } from "react";
import { SlideContext } from "@/context/SlideContext";

function FullpageStepper() {
  let activeStepIndex = useContext(SlideContext);

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");

    stepperItems.forEach((step, i) => {
      if (i === activeStepIndex[0]) {
        step.classList.add("stepper-items");
      } else {
        step.classList.remove("stepper-items");
      }
    });
  }, [activeStepIndex]);

  const [stepperColour, setStepperColour] = useState("bg-dn-green");

  useEffect(() => {
    console.log(activeStepIndex);
    switch (activeStepIndex[0]) {
      case 0:
        setStepperColour("bg-dn-green");
        break;
      case 1:
        setStepperColour("bg-dn-red");
        break;
      case 2:
        setStepperColour("bg-dn-orange");
        break;
      case 3:
        setStepperColour("bg-dn-green");
        break;
      case 4:
        setStepperColour("bg-dn-mint");
        break;
      case 5:
        setStepperColour("bg-dn-blue");
        break;
      case 6:
        setStepperColour("bg-dn-orange");
        break;
      default:
        setStepperColour("bg-dn-green");
    }
  }, [activeStepIndex]);

  return (
    <section className=" pointer-events-none">
      <ul
        className={`${stepperColour} transition-all duration-1000 w-fit md:pl-10 p-[0.5rem]  md:p-6 flex flex-col space-y-2 md:space-y-5 lg:space-y-7 `}
      >
        <li className="stepper-item  flex items-center justify-center ">
          <span className="text-white font-poppins">01</span>
        </li>

        <li className="stepper-item flex items-center justify-center">
          <span className=" text-white font-poppins ">02</span>
        </li>

        <li className="stepper-item flex items-center justify-center">
          <span className=" text-white font-poppins ">03</span>
        </li>

        <li className="stepper-item flex items-center justify-center">
          <span className=" text-white font-poppins ">04</span>
        </li>

        <li className="stepper-item flex items-center justify-center">
          <span className=" text-white font-poppins ">05</span>
        </li>

        <li className="stepper-item flex items-center justify-center">
          <span className=" text-white font-poppins ">06</span>
        </li>

        <li className="stepper-item flex  items-center justify-center">
          <span className=" text-white font-poppins ">07</span>
        </li>
      </ul>
    </section>
  );
}

export default FullpageStepper;
