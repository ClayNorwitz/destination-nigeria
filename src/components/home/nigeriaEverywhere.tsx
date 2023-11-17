import Image from "next/image";
import styles from "@/app/styles";

export default function NigeriaEverywhere() {
  return (
    <div className="w-full h-full">
      <div className="video-container z-0">
        <video autoPlay loop muted className="video">
          <source src="/video/concert.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Add content over the video here */}
        <div className="content">
          <div
            className={`flex flex-col justify-center items-center h-full z-20 ${styles.boxWidth}`}
          >
            <h2 className={`${styles.h2}  text-white text-center`}>
              Unmistakable culture,
              <span className="block">
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
      </div>
    </div>
  );
}
