import Image from "next/image";
import styles from "@/app/styles";

export default function Vision() {
  return (
    <div className={`grid grid-cols-6 items-center ${styles.boxWidth}`}>
      <div className="col-span-6 md:col-span-3 lg:col-span-4">
        <h2 className={`${styles.h2} text-dn-dark-green`}>
          Destination 2030 vision:
        </h2>
        <div className="space-y-6 max-w-2xl">
          <p
            className={`${styles.paragraphBold} text-2xl lg:text-3xl text-dn-mint`}
          >
            Nigeria, The world’s culture, creativity and entertainment capital.
          </p>
          <p className={`${styles.paragraph}  text-black`}>
            Nigeria, The world’s culture, creativity and entertainment capital.
          </p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 lg:col-span-2 flex items-end justify-end md:pl-10 lg:pl-0">
        {" "}
        <div className="space-y-6  2xl:w-3/4">
          <p className={`${styles.paragraph}  text-black`}>
            It is a national strategy with the vision of positioning Nigeria as
            a leading influence of creative expression and cultural exchange.
          </p>
          <p className={`${styles.paragraph}  text-black`}>
            Accelerating the transformation of the arts, culture and creative
            economy into a primary force for economic growth and shared
            prosperity.
          </p>
        </div>
      </div>
    </div>
  );
}
