import Image from "next/image";
import styles from "@/app/styles";

export default function VisualArts() {
  return (
    <div className="relative bg-white">
      <div
        className={`grid grid-cols-2 items-center py-24  ${styles.boxWidth}`}
      >
        <div className="col-span-2 lg:col-span-1 flex lg:justify-center ">
          <div className="bg-dn-mint h-full  w-1/4 absolute top-0 left-0"></div>

          <div className="relative  ">
            <Image
              src="/img/visual-arts.jpg"
              width={600}
              height={320}
              alt="Picture of a person singing"
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 lg:pl-36 relative pt-16 lg:pt-0">
          <h2
            className={`${styles.paragraphBold} mb-6 uppercase text-4xl text-dn-dark-green lg:text-dn-green`}
          >
            Centre of visaul arts
          </h2>
          <div className="space-y-6">
            <p className={`${styles.paragraph}  text-black`}>
              This Nigerian Destination is a bold step towards celebrating,
              preserving, and amplifying Nigeria’s rich tapestry of arts,
              culture, and the burgeoning creative economy.
            </p>
            <p className={`${styles.paragraph}  text-black`}>
              Through a dynamic display of fashion, music, film, contemporary
              art, photography and culinary art, it will highlight the power of
              culture and creativity to drive Nigeria’s economic growth, foster
              unity, and promote our unique brand on the global stage.
            </p>
            <p className={`${styles.paragraph}  text-black`}>
              The venue is much more than just a space; it’s a journey. Visitors
              will be able to experience Nigeria’s artistic evolution and
              diversity through traditional and contemporary art forms. The
              event will feature top-notch facilities for both formal
              conferences and spontaneous artistic expressions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
