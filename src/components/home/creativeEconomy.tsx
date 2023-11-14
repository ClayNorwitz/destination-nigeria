import Image from "next/image";
import styles from "@/app/styles";

export default function CultureHeritage() {
  return (
    <div className={` ${styles.boxWidth}`}>
      <h2 className={`${styles.h2}  text-dn-charcoal`}>
        <span className="block !text-[9rem] !leading-[8rem] text-dn-dark-green">
          The creative
        </span>
        economy
      </h2>
      <div className="space-y-2 max-w-4xl">
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
    </div>
  );
}
