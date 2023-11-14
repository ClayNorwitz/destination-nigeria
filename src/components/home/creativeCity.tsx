import Image from "next/image";
import styles from "@/app/styles";

export default function CreativeCity() {
  return (
    <div className="relative bg-white">
      <div className="bg-dn-mint h-full w-1/4 absolute bottom-0 right-0"></div>
      <div
        className={`grid grid-cols-2 items-center py-24  ${styles.boxWidth}`}
      >
        <div className="col-span-2 lg:col-span-1 lg:pr-36 relative text-right lg:text-left">
          <h2
            className={`${styles.paragraphBold} mb-6 uppercase text-4xl text-dn-dark-green lg:text-dn-green `}
          >
            Abuja creative city
          </h2>
          <div className="space-y-6">
            <p className={`${styles.paragraph}  text-black`}>
              The Abuja Creative City will not just be a landmark for Nigeria
              but for the entire African continent.
            </p>
            <p className={`${styles.paragraph}  text-black`}>
              A world-class creative city spanning 1000 hectares , set to
              Establish Abuja as the epicentre of African creativity,
              innovation, and cultural heritage by developing a globally
              recognised city that offers unparalleled opportunities,
              infrastructure, and inspiration.
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-end lg:justify-center pt-16 lg:pt-0">
          <div className="relative  ">
            <Image
              src="/img/creative-city.jpg"
              width={600}
              height={320}
              alt="Picture of a person singing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
