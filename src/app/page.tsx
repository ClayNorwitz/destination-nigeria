import Image from "next/image";
import Hero from "@/components/home/hero";
import Section from "@/components/section";
import CultureHeritage from "@/components/home/cultureHeritage";
import CreativeEconomy from "@/components/home/creativeEconomy";
import Vision from "@/components/home/vision";
import NigeriaEverywhere from "@/components/home/nigeriaEverywhere";
import VisualArts from "@/components/home/visualArts";
import HomeNewsletter from "@/components/home/homeNewsletter";
import WeAreNigeria from "@/components/home/weAreNigeria";
import CreativeCity from "@/components/home/creativeCity";

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        paddingTop="pt-20 2xl:pt-24"
        paddingBottom="pb-20 2xl:pb-24"
        background="bg-white"
      >
        <CultureHeritage />
      </Section>
      <Section
        paddingTop="pt-20 2xl:pt-24"
        paddingBottom="pb-20 2xl:pb-24"
        background="bg-dn-beige"
      >
        <CreativeEconomy />
      </Section>
      <Section
        paddingTop="pt-20 2xl:pt-24"
        paddingBottom="pb-20 2xl:pb-24"
        background="bg-white"
      >
        <Vision />
      </Section>
      <NigeriaEverywhere />
      <Section
        paddingTop="pt-20 2xl:pt-24"
        paddingBottom="pb-0"
        background="bg-white"
      >
        <VisualArts />
      </Section>
      <Section
        paddingTop="pt-0"
        paddingBottom="pb-20 2xl:pb-24"
        background="bg-white"
      >
        <CreativeCity />
      </Section>
      <HomeNewsletter />
      <Section
        paddingTop="pt-20 2xl:pt-24"
        paddingBottom="pb-20 2xl:pb-24"
        background="bg-white"
      >
        <WeAreNigeria />
      </Section>
    </>
  );
}
