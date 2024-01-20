"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import Ic_Arrow from "@/assets/icons/ic_arrow.svg";
import styles from "./styles.module.scss";

export const BackButton: FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className={styles.button}
    >
      <Ic_Arrow />
    </button>
  );
};
