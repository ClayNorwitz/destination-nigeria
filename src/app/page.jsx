"use client";
import Image from "next/image";
import Hero from "@/components/home/hero";
import Section from "@/components/section";
import CultureHeritage from "@/components/home/cultureHeritage";
import CreativeEconomy from "@/components/home/creativeEconomy";
import Vision from "@/components/home/vision";
import NigeriaEverywhere from "@/components/home/nigeriaEverywhere";
import WeAreNigeria from "@/components/home/weAreNigeria";
import React, {
  useEffect,
  useState,
  createContext,
  Component,
  useRef,
  Fragment,
} from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FullpageStepper from "../components/fullpageStepper";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./styles";
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

const FullpageWrapper = ({ SetCurrentSlide, setOpen }) => {
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
          <div className="h-full relative">
            <FullScreenSection>
              <Hero setOpen={setOpen} />
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
              <ProjectHighlights setOpen={setOpen} />
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
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="relative h-full">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg lg:max-w-xl sm:p-6">
                    <div className="absolute right-3 top-1">
                      <span
                        onClick={() => {
                          setOpen(false);
                        }}
                        className={`${styles.paragraph} !text-2xl cursor-pointer`}
                      >
                        x
                      </span>
                    </div>
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-dn-dark-green sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className={`${styles.h3}`}>
                          Subscribe to our newsletter
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className={`${styles.paragraph}`}>
                            All your information will be kept confidential and
                            we’ll only send you the latest updates, news and
                            events that are happening in our city
                          </p>
                        </div>

                        {/* Newsletter Form Section */}
                        <div className="">
                          <div className="mx-auto max-w-7xl ">
                            <div className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></div>
                            <form className="mt-4 max-w-md">
                              <div className="flex gap-x-4">
                                <label htmlFor="name" className="sr-only">
                                  Name
                                </label>
                                <input
                                  id="email-address"
                                  name="name"
                                  type="text"
                                  autoComplete="name"
                                  required
                                  className={`${styles.paragraph} min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dn-dark-green sm:text-sm sm:leading-6`}
                                  placeholder="Full Name"
                                />
                                <label
                                  htmlFor="email-address"
                                  className="sr-only"
                                >
                                  Email address
                                </label>
                                <input
                                  id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className={`${styles.paragraph} min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dn-dark-green sm:text-sm sm:leading-6`}
                                  placeholder="Email Address"
                                />
                                <button
                                  type="submit"
                                  className={`${styles.paragraph} uppercase flex-none rounded-md bg-dn-dark-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dn-dark-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dn-dark-green`}
                                >
                                  Subscribe
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <SlideContext.Provider value={[currentSlide]}>
          <div className="fixed w-fit top-1/2 -translate-y-1/2 z-10  ">
            <FullpageStepper />
          </div>
          <FullpageWrapper
            dotsActive={dotsActive}
            SetCurrentSlide={SetCurrentSlide}
            setOpen={setOpen}
          />
        </SlideContext.Provider>
      </div>
    </>
  );
}
