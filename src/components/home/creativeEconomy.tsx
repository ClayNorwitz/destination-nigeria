import Image from "next/image";
import styles from "@/app/styles";

export default function CreativeEconomy() {
  return (
    <div className="relative bg-white h-full w-full">
      <div
        className={`grid grid-cols-2 items-center justify-center h-full ${styles.boxWidth}`}
      >
        <div className="col-span-2 lg:col-span-1 lg:pl-36 relative pt-16 lg:pt-0">
          <h2 className={`${styles.h2} mb-10 text-black`}>
            The <span className="text-dn-orange">creative economy</span>
          </h2>
          <div className="space-y-2">
            <p className={`${styles.paragraph}  text-black`}>
              The creative economy is extensive and encompasses the production
              and distribution of ideas, innovations, goods and services that
              are the result of human creativity, skill, and talent across all
              aspects of Nigerian culture, including fashion, arts, design,
              media, entertainment, technology, heritage and more.
            </p>
            <p className={`${styles.paragraph}  text-black`}>
              A strong creative and cultural economy is a key driver of growth
              and presents an opportunity to accelerate Nigeria’s expansion on a
              local and the global stage.
            </p>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex lg:justify-center">
          <div className="bg-dn-orange h-2/3 2xl:h-1/2  w-1/4 absolute top-1/2 -translate-y-1/2 right-0"></div>

          <div className="relative ">
            <Image
              src="/img/woman-covering-face.jpg"
              width={600}
              height={320}
              alt="Picture of a woman covering her eye with her hand"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
