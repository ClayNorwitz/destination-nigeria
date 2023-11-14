import Image from "next/image";
import styles from "@/app/styles";

export default function WeAreNigeria() {
  return (
    <div
      className={`py-24 flex flex-col justify-center items-center h-full ${styles.boxWidth}`}
    >
      <h2 className={`${styles.h2} !mb-0  text-black text-center`}>
        We are unmistakable, we are unlimited,{" "}
        <span className="md:block lg:inline">everywhere we are</span>
        <span className="block text-dn-dark-green md:!text-[7rem] !text-[4rem] !leading-[4rem] md:!leading-[6rem]">
          we are Nigeria
        </span>
      </h2>
    </div>
  );
}
