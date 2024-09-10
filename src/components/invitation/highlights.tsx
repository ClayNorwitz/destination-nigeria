import styles from "@/app/styles";
import {
  MusicalNoteIcon,
  PhotoIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { LuNetwork } from "react-icons/lu";
import { TbHanger } from "react-icons/tb";

const Highlights = () => {
  return (
    <div className={`${styles.boxWidth} pt-20`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className="col-span-1  p-6 flex items-center justify-center flex-col">
          <div className="bg-dn-green rounded-full h-16 w-16 flex items-center justify-center">
            <UserGroupIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className={`text-black ${styles.paragraph} mt-4`}>
            Culture & The Economy Panels{" "}
          </h3>
        </div>
        <div className="col-span-1  p-6 flex items-center justify-center flex-col">
          <div className="bg-dn-green rounded-full h-16 w-16 flex items-center justify-center">
            <PhotoIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className={`text-black ${styles.paragraph} mt-4`}>
            Art Exhibition
          </h3>
        </div>
        <div className="col-span-1  p-6 flex items-center justify-center flex-col">
          <div className="bg-dn-green rounded-full h-16 w-16 flex items-center justify-center">
            <MusicalNoteIcon className="h-8 w-8 text-white" />
          </div>
          <h3 className={`text-black ${styles.paragraph} mt-4`}>
            Musical Performances
          </h3>
        </div>
        <div className="col-span-1  p-6 flex items-center justify-center flex-col">
          <div className="bg-dn-green rounded-full h-16 w-16 flex items-center justify-center">
            <TbHanger className="h-8 w-8 text-white" />
          </div>
          <h3 className={`text-black ${styles.paragraph} mt-4`}>
            Fashion Showcase
          </h3>
        </div>
        <div className="col-span-1  p-6 flex items-center justify-center flex-col">
          <div className="bg-dn-green rounded-full h-16 w-16 flex items-center justify-center">
            <GiForkKnifeSpoon className="h-8 w-8 text-white" />
          </div>
          <h3 className={`text-black ${styles.paragraph} mt-4`}>
            Culinary Exhibition
          </h3>
        </div>
        <div className="col-span-1  p-6 flex items-center justify-center flex-col">
          <div className="bg-dn-green rounded-full h-16 w-16 flex items-center justify-center">
            <LuNetwork className="h-8 w-8 text-white" />
          </div>
          <h3 className={`text-black ${styles.paragraph} mt-4`}>
            Networking Opportunities
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
