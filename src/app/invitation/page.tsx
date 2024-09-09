import React from "react";

import HeroSection from "@/components/invitation/hero-section";
import IntroSection from "@/components/invitation/intro-section";
import Highlights from "@/components/invitation/highlights";
import VideoSection from "@/components/invitation/video-section";
import Logos from "@/components/invitation/logos";
const Invitation = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <Highlights />
      <VideoSection />
      <Logos />
    </>
  );
};
export default Invitation;
