import Image from "next/image";
import styles from "@/app/styles";
import React, { useState } from "react";

export default function ProjectHighlights({ setOpen }: { setOpen: any }) {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="h-full w-full bg-white">
      <div
        className={`${styles.boxWidth} flex flex-col justify-center items-center h-full`}
      >
        <div>
          <h2 className={`${styles.h2} text-black`}>
            Current project <span className="text-dn-blue">highlights</span>
          </h2>
        </div>
        <div className="flex max-w-6xl space-x-16">
          <div className="bg-white shadow-md border border-dn-beige flex-1 ">
            <div className="abuja-city-bg h-48 flex items-center px-10">
              <h3 className={`${styles.h3} !mb-0 text-white`}>
                ABUJA CREATIVE CITY
              </h3>
            </div>
            <div className="p-10 space-y-2">
              <p className={`${styles.paragraph} text-black text-sm`}>
                The Abuja Creative City will not just be a landmark for Nigeria
                but for the entire African continent.
              </p>
              <p className={`${styles.paragraph} text-black text-sm`}>
                A world-class creative city spanning 1000 hectares , set to
                Establish Abuja as the epicentre of African creativity,
                innovation, and cultural heritage by developing a globally
                recognised city that offers unparalleled opportunities,
                infrastructure, and inspiration
              </p>
              <div className="pt-5">
                {" "}
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="flex-none  rounded-sm bg-white/5 uppercase font-poppins font-bold px-3.5 py-2.5 text-dn-blue shadow-sm ring-1 ring-dn-blue hover:bg-dn-blue hover:text-white transition-colors focus:outline-none"
                >
                  Sign up to our mailing list
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md border border-dn-beige flex-1">
            <div className="visual-arts-bg h-48 flex items-center px-10">
              <h3 className={`${styles.h3} !mb-0 text-white`}>
                CENTRE OF VISUAL ARTS
              </h3>
            </div>
            <div className="p-10 space-y-2">
              <p className={`${styles.paragraph} text-black text-sm`}>
                This Nigerian Destination is a bold step towards celebrating,
                preserving, and amplifying Nigeria&apos;s rich tapestry of arts,
                culture, and the burgeoning creative economy.
              </p>
              <p className={`${styles.paragraph} text-black text-sm`}>
                Through a dynamic display of fashion, music, film, contemporary
                art, photography and culinary art, it will highlight the power
                of culture and creativity to drive Nigeria&apos;s economic
                growth, foster unity, and promote our unique brand on the global
                stage.
              </p>
              <p
                className={`${
                  styles.paragraph
                } text-black text-sm transition-opacity duration-300 ease-in-out ${
                  showFullText ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                The venue is much more than just a space; it&apos;s a journey.
                Visitors will be able to experience Nigeria&apos;s artistic
                evolution and diversity through traditional and contemporary art
                forms. The event will feature top-notch facilities for both
                formal conferences and spontaneous artistic expressions.
              </p>
              <button
                className={`${styles.paragraphBold} !text-black text-sm cursor-pointer`}
                onClick={handleReadMoreClick}
              >
                {showFullText ? "Read Less.." : "Read More.."}
              </button>
              <div className="pt-5">
                {" "}
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="flex-none  rounded-sm bg-white/5 uppercase font-poppins font-bold px-3.5 py-2.5 text-dn-blue shadow-sm ring-1 ring-dn-blue hover:bg-dn-blue hover:text-white transition-colors focus:outline-none"
                >
                  Sign up to our mailing list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
