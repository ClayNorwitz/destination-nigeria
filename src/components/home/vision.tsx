import Image from "next/image";
import styles from "@/app/styles";

export default function Vision() {
  return (
    <div className="h-full w-full destination-vision">
      <div className={`grid grid-cols-6 items-center h-full `}>
        <div className="col-span-6 lg:col-span-3 pl-14 pr-4 md:pr-24 lg:pr-0 md:pl-40 pt-6 lg:pt-0">
          <h2 className={`${styles.h2} text-white`}>
            Destination 2030 <span className="text-dn-dark-green">vision:</span>
          </h2>
          <div className="space-y-2 lg:space-y-6 max-w-2xl">
            <p className={`${styles.paragraphBold} lg:text-2xl  text-white`}>
              Nigeria, The world’s culture, creativity and entertainment
              capital.
            </p>
            <p className={`${styles.paragraph}  text-white`}>
              Destination 2030, Nigeria is set to establish Nigeria as the
              leading global hub for arts, culture, and creativity.
            </p>
            <p className={`${styles.paragraph}  text-white`}>
              It is a national strategy with the vision of positioning Nigeria
              as a leading influence of creative expression and cultural
              exchange.
            </p>
            <p className={`${styles.paragraph}  text-white`}>
              Accelerating the transformation of the arts, culture and creative
              economy into a primary force for economic growth and shared
              prosperity.
            </p>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3  h-full flex items-center justify-center md:pl-10 lg:pl-0 relative">
          <div>
            <Image
              src="/img/brand-logo-motif.png"
              width={400}
              height={484}
              alt="Picture of a woman covering her eye with her hand"
              className="relative  bouncing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
