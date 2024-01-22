"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import Ic_Arrow from "@/assets/icons/ic_arrow.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

export const BackButton: FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className={styles.button}
    >
      <Image src={Ic_Arrow} alt={"Back"} />
    </button>
  );
};
