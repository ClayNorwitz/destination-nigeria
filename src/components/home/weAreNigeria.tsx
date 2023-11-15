import Image from "next/image";
import styles from "@/app/styles";

export default function WeAreNigeria() {
  return (
    <div className="bg-dn-orange h-full w-full">
      <div
        className={` flex flex-col justify-center items-center h-full max-w-5xl ${styles.boxWidth}`}
      >
        <h2 className={`${styles.h2} !mb-0  text-white text-center`}>
          We are unmistakable, we are unlimited,
          <span className="block">everywhere we are, we are Nigeria</span>
        </h2>
      </div>
    </div>
  );
}
