"use client";

import { FC } from "react";
import Ic_PalmScan from "@/assets/icons/ic_palm_scan.svg";
import { StyledText } from "@/shared/componets/styled-text";
import { StyledButton } from "@/shared/componets/styled-button/view";
import Link from "next/link";
import { GENDER_PAGE_ROUTE } from "@/config/routes/lib";

export const HomeWidget: FC = () => {
  return (
    <>
      <Ic_PalmScan />
      <StyledText variant="h1" styles={{ marginTop: 24 }}>
        Find your happiness with highly- personalized predictions.
      </StyledText>
      <Link href={GENDER_PAGE_ROUTE} style={{ width: "100%" }}>
        <StyledButton styles={{ marginTop: 24, width: 400 }}>
          Let’s Begin
        </StyledButton>
      </Link>

      <StyledText
        variant="p"
        styles={{
          fontSize: "11.813px",
          color: "#121620",
          paddingBottom: 0,
          marginBottom: 0,
          marginTop: 12,
        }}
      >
        By continuing, you agree to our EULA and Privacy Notice. Have a
        question? Reach our <br />
        support team here.
      </StyledText>
      <StyledText variant="h5">
        This Palm Reading App is for entertainment purposes only and will not
        make death <br /> predictions
      </StyledText>
    </>
  );
};
