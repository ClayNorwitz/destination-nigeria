import React, { useContext, useEffect } from "react";
import { SlideContext } from "@/app/page";

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
  return (
    <section className=" pointer-events-none">
      <ul className="bg-dn-green w-fit pl-10  p-6 flex flex-col   space-y-7 ">
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
