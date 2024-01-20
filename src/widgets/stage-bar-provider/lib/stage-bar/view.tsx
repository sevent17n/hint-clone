"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  COLOR_ROUTE,
  DATE_OF_BIRTH_ROUTE,
  DECISIONS_ROUTE,
  ELEMENT_ROUTE,
  GENDER_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PALM_INFO_ABOUT_ROUTE,
  RELATIONSHIP_ROUTE,
  SCAN_ROUTE,
  WISHES_ROUTE,
} from "@/config/routes/lib";

export const StageBar: FC = () => {
  const pathname = usePathname();

  const routesMapping = {
    [HOME_PAGE_ROUTE]: 0,
    [GENDER_PAGE_ROUTE]: 1,
    [DATE_OF_BIRTH_ROUTE]: 2,
    [PALM_INFO_ABOUT_ROUTE]: 3,
    [WISHES_ROUTE]: 4,
    [RELATIONSHIP_ROUTE]: 5,
    [ELEMENT_ROUTE]: 6,
    [COLOR_ROUTE]: 7,
    [DECISIONS_ROUTE]: 8,
    [SCAN_ROUTE]: 9,
  } as Record<string, number>;

  const stage = routesMapping[pathname];

  return (
    <div
      className={styles.stage_bar}
      style={{ display: stage === 9 ? "none" : "block" }}
    >
      <p
        style={{
          color: "rgba(6, 111, 222, 0.80)",
          fontSize: 14,
          fontWeight: 600,
          height: 14,
        }}
      >
        {stage} / 9
      </p>
      <div className={styles.bar_container}>
        <div className={clsx(styles.ball, styles.ball_active)}></div>
        <motion.div
          className={styles.bar}
          animate={{ width: 50 * stage, scale: 1, rotate: 0 }}
        />
        <div className={styles.bar_bg} />
        <div className={clsx(styles.ball, styles.ball_inactive)}></div>
      </div>
    </div>
  );
};
