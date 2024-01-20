"use server";
import { FC } from "react";
import { ContentContainerProps } from "./types";
import styles from "./styles.module.scss";

export const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
