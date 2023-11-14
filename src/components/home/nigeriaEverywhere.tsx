import Image from "next/image";
import styles from "@/app/styles";

export default function NigeriaEverywhere() {
  return (
    <div className="nigeria-everywhere-image">
      <div
        className={`flex flex-col justify-center items-center h-full ${styles.boxWidth}`}
      >
        <h2
          className={`${styles.h2} 2xl:!text-[7rem] 2xl:!leading-[8rem] text-white text-center`}
        >
          Unmistakable culture{" "}
          <span className="block">
            exceptional talent, from nigeria to the world
          </span>
        </h2>
        <p
          className={`${styles.paragraphBold} text-2xl md:text-5xl text-dn-green`}
        >
          #NigeriaEverywhere
        </p>
      </div>
    </div>
  );
}
