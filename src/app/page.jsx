"use client";
import Image from "next/image";
import Hero from "@/components/home/hero";
import Section from "@/components/section";
import CultureHeritage from "@/components/home/cultureHeritage";
import CreativeEconomy from "@/components/home/creativeEconomy";
import Vision from "@/components/home/vision";
import NigeriaEverywhere from "@/components/home/nigeriaEverywhere";
import WeAreNigeria from "@/components/home/weAreNigeria";
import React, { useEffect, useState, createContext, Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FullpageStepper from "../components/fullpageStepper";

import { useRouter } from "next/router";
import ProjectHighlights from "@/components/home/projectHighlights";

// import { useReducer } from "react";

export const SlideContext = createContext(0);

const useShareableState = () => {
  const [currentSlide, SetCurrentSlide] = useState(0);

  return {
    currentSlide,
    SetCurrentSlide,
  };
};

const FullScreenSection = ({ children }) => {
  return (
    <div className="section h-full flex items-center justify-center">
      {children}
    </div>
  );
};

const FullpageWrapper = ({ SetCurrentSlide }) => {
  return (
    <ReactFullpage
      licenseKey={"K33GH-CR597-09KK8-01PJK-OJTQP"}
      scrollOverflow={false}
      fitToSection={false}
      allowScrolling={true}
      onLeave={(origin, destination, direction) => {
        SetCurrentSlide(destination.index);
      }}
      // anchors={["home", "solutions", "services", "testimonial", "footer"]}
      render={({ state, fullpageApi }) => {
        return (
          <div className="h-full">
            <FullScreenSection>
              <Hero />
            </FullScreenSection>
            <FullScreenSection>
              <CultureHeritage />
            </FullScreenSection>
            <FullScreenSection>
              <CreativeEconomy />
            </FullScreenSection>
            <FullScreenSection>
              <Vision />
            </FullScreenSection>
            <FullScreenSection>
              <NigeriaEverywhere />
            </FullScreenSection>
            <FullScreenSection>
              <ProjectHighlights />
            </FullScreenSection>
            <FullScreenSection>
              <WeAreNigeria />
            </FullScreenSection>
          </div>
        );
      }}
    />
  );
};

export default function Home() {
  const [dotsActive, setDotsActive] = useState(true);
  const [currentSlide, SetCurrentSlide] = useState(0);
  return (
    <>
      <div className="relative h-full">
        <SlideContext.Provider value={[currentSlide]}>
          <div className="fixed w-fit top-1/2 -translate-y-1/2 z-10  ">
            <FullpageStepper />
          </div>
          <FullpageWrapper
            dotsActive={dotsActive}
            SetCurrentSlide={SetCurrentSlide}
          />
        </SlideContext.Provider>
      </div>
    </>
  );
}
