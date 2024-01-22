"use server";
import { FC } from "react";
import Ic_ScanPalm from "@/assets/icons/ic_palm_scan.svg";
import Image from "next/image";
import { StyledText } from "@/shared/componets/styled-text";
import { StyledButton } from "@/shared/componets/styled-button";
import Ic_Trusted from "@/assets/icons/ic_trusted.svg";
import Link from "next/link";
import { TAKE_A_PHOTO_ROUTE } from "@/config/routes/lib";
import { PrivacyWarning } from "@/shared/componets/privacy-warning";

export const ScanPage: FC = () => {
  return (
    <main>
      <Image src={Ic_ScanPalm} alt={"Palm"} />
      <StyledText
        variant="h2"
        styles={{
          marginTop: 24,
        }}
      >
        Let’s scan your palms
      </StyledText>
      <StyledText
        variant="h3"
        styles={{
          marginTop: 24,
        }}
      >
        Follow the on-screen instructions, so we can analyze your palm lines and
        reveal your future, and the secrets of your destiny!
      </StyledText>

      <Link href={TAKE_A_PHOTO_ROUTE}>
        <StyledButton
          styles={{
            maxWidth: 400,
            width: "100%",
            marginTop: 26,
          }}
        >
          Let&apos;s do it
        </StyledButton>
      </Link>
      <div style={{ maxWidth: 400, textAlign: "left", margin: "0 auto" }}>
        <PrivacyWarning />
      </div>
    </main>
  );
};
