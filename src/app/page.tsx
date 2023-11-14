import Image from "next/image";
import Hero from "@/components/home/hero";
import Section from "@/components/section";
import CultureHeritage from "@/components/home/cultureHeritage";
import CreativeEconomy from "@/components/home/creativeEconomy";

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
    </>
  );
}
