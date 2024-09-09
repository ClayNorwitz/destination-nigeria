import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <Image
        src="/img/sponsor-header.jpg"
        width={1920}
        height={598}
        alt="Picture of a person singing"
        className="object-cover mx-auto"
      />
    </div>
  );
};

export default HeroSection;
