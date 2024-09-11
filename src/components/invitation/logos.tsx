import styles from "@/app/styles";
import Image from "next/image";

const Logos = () => {
  return (
    <div className={`${styles.boxWidth} py-20`}>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">
        <div className="col-span-1">
          <h3 className={`${styles.h4} !text-3xl !text-dn-green`}>
            Creative Economy Strategic Partner
          </h3>
          <div className="flex gap-x-4">
            <div className="bg-white  rounded  h-28 w-full relative">
              <Image
                fill={true}
                src="/img/logos/afreximbank_logo.jpeg"
                alt="Picture of Afreximbank logo"
                className="object-contain mix-blend-multiply p-2"
              />
            </div>
            <div className="bg-white  rounded  h-28 w-full relative">
              <Image
                fill={true}
                src="/img/logos/CANEX-logo.png"
                alt="Picture of Canex logo"
                className="object-contain mix-blend-multiply p-2"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className={`${styles.h4} !text-3xl !text-dn-green`}>
            Industry Partners
          </h3>
          <div className="flex gap-x-4">
            <div className="bg-white  rounded  h-28 w-full relative">
              <Image
                fill={true}
                src="/img/logos/NATIONAL-THEATRE.jpg"
                alt="Picture of National Theatre logo"
                className="object-contain mix-blend-multiply p-2"
              />
            </div>
            <div className="bg-white  rounded  h-28 w-full relative">
              <Image
                fill={true}
                src="/img/logos/CBAAC.png"
                alt="Picture of CBAAC logo"
                className="object-contain  p-2"
              />
            </div>
          </div>
          <div className="flex gap-x-4 mt-4">
            <div className="bg-white  rounded  h-28 w-full relative ">
              <Image
                fill={true}
                src="/img/logos/AFRIFF-OFFICIAL-LOGO-BLUE_edited.png"
                alt="Picture of Afriff logo"
                className="object-contain mix-blend-multiply p-2"
              />
            </div>
            <div className="bg-white  rounded  h-28 w-full relative">
              <Image
                fill={true}
                src="/img/logos/NCAC.png"
                alt="Picture of National Council logo"
                className="object-contain  p-2"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className={`${styles.h4} !text-3xl !text-dn-green`}>
            Media Partners
          </h3>
          <div className="flex gap-x-4">
            <div className="bg-white  rounded  h-28 w-full relative">
              <Image
                fill={true}
                src="/img/logos/Futuretech-Logo-Icon-electric-dark-blue.png"
                alt="Picture of Futuretech logo"
                className="object-contain mix-blend-multiply p-2"
              />
            </div>
            <div className="bg-white  rounded  h-28 w-full relative">
              <Image
                fill={true}
                src="/img/logos/LIL-Plus.png"
                alt="Picture of Lost in Lagos logo"
                className="object-contain  p-2"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className={`${styles.h4} !text-3xl !text-dn-green`}>
            Official Beverage Partners
          </h3>
          <div className="flex gap-x-4">
            <div className="bg-white  rounded  h-28 w-full relative flex-1">
              <Image
                fill={true}
                src="/img/logos/STAR-BEER-USA.jpg"
                alt="Picture of Star Beer logo"
                className="object-contain  p-2"
              />
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
