import Image from "next/image";
import styles from "@/app/styles";

export default function CreativeEconomy() {
  return (
    <div className={` ${styles.boxWidth}`}>
      <h2 className={`${styles.h2}  text-dn-charcoal`}>
        <span className="block lg:!text-[9rem] !text-[7rem] !leading-[6rem] lg:!leading-[8rem] text-dn-dark-green">
          The creative
        </span>
        economy
      </h2>
      <div className="space-y-6 max-w-xl lg:max-w-4xl">
        <p className={`${styles.paragraph}  text-black`}>
          The creative economy is extensive and encompasses the production and
          distribution of ideas, innovations, goods and services that are the
          result of human creativity, skill, and talent across all aspects of
          Nigerian culture, including fashion, arts, design, media,
          entertainment, technology, heritage and more.
        </p>
        <p className={`${styles.paragraph}  text-black`}>
          A strong creative and cultural economy is a key driver of growth and
          presents an opportunity to accelerate Nigeria’s expansion on a local
          and the global stage.{" "}
        </p>
      </div>
      <div className="md:block absolute right-0 top-0 hidden">
        <Image
          src="/img/green-orange-motif.png"
          width={112}
          height={510}
          alt="Picture green and orange pattern"
        />
      </div>
    </div>
  );
}
