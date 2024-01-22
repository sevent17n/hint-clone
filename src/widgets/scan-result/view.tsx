"use client";

import { useScanResult } from "@/shared/context/scan-result-context";
import Image from "next/image";
import styles from "./styles.module.scss";

export const ScanResult = () => {
  const { image, hand } = useScanResult();
  const imageUrl = image ? URL.createObjectURL(image) : "";

  return (
    <div>
      <Image
        src={imageUrl}
        alt={"Palmistry"}
        width={300}
        height={500}
        className={styles.image}
      />
    </div>
  );
};
