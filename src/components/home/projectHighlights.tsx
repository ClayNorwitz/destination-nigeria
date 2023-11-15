import Image from "next/image";
import styles from "@/app/styles";

export default function ProjectHighlights() {
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
        <div className="flex w-2/3 space-x-24">
          <div className="bg-white shadow-md border border-dn-beige flex-1">
            <Image
              src="/img/creative-city.jpg"
              width={530}
              height={298}
              alt="Picture of the city Abuja "
              className="relative"
            />
            <div className="p-4 space-y-2">
              <p className={`${styles.paragraph} text-black`}>
                The Abuja Creative City will not just be a landmark for Nigeria
                but for the entire African continent.
              </p>
              <p className={`${styles.paragraph} text-black`}>
                A world-class creative city spanning 1000 hectares , set to
                Establish Abuja as the epicentre of African creativity,
                innovation, and cultural heritage by developing a globally
                recognised city that offers unparalleled opportunities,
                infrastructure, and inspiration
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md border border-dn-beige flex-1">
            <Image
              src="/img/creative-city.jpg"
              width={530}
              height={298}
              alt="Picture of the city Abuja "
              className="relative"
            />
            <div className="p-4">
              <p className={`${styles.paragraph} text-black`}>
                The Abuja Creative City will not just be a landmark for Nigeria
                but for the entire African continent.
              </p>
              <p className={`${styles.paragraph} text-black`}>
                A world-class creative city spanning 1000 hectares , set to
                Establish Abuja as the epicentre of African creativity,
                innovation, and cultural heritage by developing a globally
                recognised city that offers unparalleled opportunities,
                infrastructure, and inspiration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
