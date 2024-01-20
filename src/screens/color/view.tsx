"use client";

import { DECISIONS_ROUTE } from "@/config/routes/lib";
import { StyledButton } from "@/shared/componets/styled-button/view";
import { StyledText } from "@/shared/componets/styled-text";
import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";

export const ColorPage: FC = () => {
  return (
    <div style={{ padding: "0 32px" }}>
      <StyledText variant="h2">
        Which element resonates with you the most?
      </StyledText>
      <Link href={DECISIONS_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          commonColor
          styles={{ marginTop: 26, textAlign: "left" }}
          icon={
            <div className={styles.round} style={{ background: "#FF5758" }} />
          }
        >
          Red
        </StyledButton>
      </Link>
      <Link href={DECISIONS_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={
            <div className={styles.round} style={{ background: "#FFF73D" }} />
          }
          commonColor
        >
          Yellow
        </StyledButton>
      </Link>
      <Link href={DECISIONS_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={
            <div className={styles.round} style={{ background: "#066FDE" }} />
          }
          commonColor
        >
          Blue
        </StyledButton>
      </Link>
      <Link href={DECISIONS_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={
            <div className={styles.round} style={{ background: "#FFA800" }} />
          }
          commonColor
        >
          <div>Orange</div>
        </StyledButton>
      </Link>
      <Link href={DECISIONS_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={
            <div className={styles.round} style={{ background: "#75DB9C" }} />
          }
          commonColor
        >
          Green
        </StyledButton>
      </Link>
      <Link href={DECISIONS_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={
            <div className={styles.round} style={{ background: "#9747FF" }} />
          }
          commonColor
        >
          Violet
        </StyledButton>
      </Link>
    </div>
  );
};
