"use client";

import { FC } from "react";
import { ModalProps } from "./types";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
  position,
  style,
}) => {
  const handleOverlayClick = () => {
    onClose();
  };
  const isPositionCenter = position === "center";
  return (
    <>
      <div
        className={clsx(styles.overlayStyle, {
          [styles.hidden]: !open,
        })}
        onClick={handleOverlayClick}
      />
      <div
        style={style}
        className={clsx(styles.modalStyle, {
          [styles.hidden]: !open,
          [styles.center]: isPositionCenter,
          [styles.bottom]: !isPositionCenter,
        })}
      >
        <div>{children}</div>
      </div>
    </>
  );
};
