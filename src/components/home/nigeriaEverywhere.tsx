import Image from "next/image";
import styles from "@/app/styles";

export default function NigeriaEverywhere() {
  return (
    <div className="nigeria-everywhere-image h-full">
      <div
        className={`flex flex-col justify-center items-center h-full w-[17rem] md:w-full ${styles.boxWidth}`}
      >
        <h2 className={`${styles.h2}  text-white text-center`}>
          Unmistakable culture,
          <span className="md:block">
            exceptional talent, from nigeria to the world
          </span>
        </h2>
        <p
          className={`${styles.paragraphBold} text-2xl md:text-5xl text-dn-mint`}
        >
          #NigeriaEverywhere
        </p>
      </div>
    </div>
  );
}
