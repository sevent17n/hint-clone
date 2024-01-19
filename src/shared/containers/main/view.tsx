import { FC } from "react";
import { MainContainerProps } from "./types";
import styles from "./styles.module.scss";

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
