import Image from "next/image";
import styles from "@/app/styles";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { splitTitle, splitText } from "@/utils/gsap";

export default function CultureHeritage() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    splitTitle(titleRef, containerRef);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white h-full w-full">
      <div
        className={`grid grid-cols-2 items-center justify-center h-full  ${styles.boxWidth}`}
      >
        <div className="col-span-2 lg:col-span-1 ">
          <div className="bg-dn-red h-full w-1/4 absolute top-0 left-0"></div>
          <div className="relative flex items-center justify-center">
            <div className=" space-y-12">
              <Image
                src="/img/cultural-heritage-2.jpg"
                width={500}
                height={281}
                alt="Picture of a person singing"
              />
              <Image
                src="/img/cultural-heritage-1.jpg"
                width={500}
                height={281}
                alt="Picture of a person"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 relative pt-16 lg:pt-0 pl-20 2xl:pl-40">
          <h2 ref={titleRef} className={`${styles.h2} !mb-10 text-dn-charcoal`}>
            Nigeria&apos;s
            <span className="text-dn-red "> cultural heritage </span>
          </h2>
          <div className="space-y-2">
            <p
              className={`${styles.paragraphBold} text-xl lg:text-2xl text-black`}
            >
              A rich cultural heritage spanning over 300 ethnic groups
            </p>
            <p className={`${styles.paragraph}  text-black`}>
              with numerous talented creators exporting cultural assets
              worldwide. Nigeria&apos;s cultural heritage inspires the creative
              economy, provides livelihoods for communities, and offers
              boundless potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
