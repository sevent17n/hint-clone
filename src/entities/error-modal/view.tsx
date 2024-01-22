"use client";
import { Modal } from "@/shared/componets/modal/view";
import { FC } from "react";
import { ErrorModalProps } from "./types";
import { StyledText } from "@/shared/componets/styled-text";
import { StyledButton } from "@/shared/componets/styled-button";
import Image from "next/image";
import Insctructions_SM from "@/assets/images/instructions__sm.png";
import Ic_Cross from "@/assets/icons/ic_cross.svg";
import styles from "./styles.module.scss";

export const ErrorModal: FC<ErrorModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      position={"center"}
      open={open}
      onClose={onClose}
      style={{ borderRadius: 8, width: 311, height: 485 }}
    >
      <div className={styles.container}>
        <div className={styles.close_button_container}>
          <button onClick={onClose}>
            <span>
              <Image src={Ic_Cross} alt="close" />
            </span>
          </button>
        </div>
        <StyledText variant="h2" styles={{ marginTop: 10 }}>
          Unfortunately, we couldn’t identify a palm on your photo.
        </StyledText>
        <Image
          style={{ marginTop: 20, marginRight: -35 }}
          src={Insctructions_SM}
          alt={"Instructions"}
        />
        <StyledText styles={{ marginTop: 15 }} variant="h3">
          Please make sure that your palm is clearly visible as per instruction
          on the image above.
        </StyledText>
        <StyledButton styles={{ marginTop: 15 }} onClick={onClose}>
          Try again
        </StyledButton>
      </div>
    </Modal>
  );
};
