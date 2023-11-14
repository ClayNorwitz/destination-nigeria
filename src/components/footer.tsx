import Image from "next/image";
import styles from "@/app/styles";

export default function Footer() {
  return (
    <div className="bg-dn-beige py-6">
      <div className="flex items-center w-full justify-center">
        <p className={`${styles.paragraph} text-sm`}>
          &copy; 2023 Destination 2030 Nigeria, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
