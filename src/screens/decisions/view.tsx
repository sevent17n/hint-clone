"use server";
import { SCAN_ROUTE } from "@/config/routes/lib";
import { StyledButton } from "@/shared/componets/styled-button/view";
import { StyledText } from "@/shared/componets/styled-text";
import Link from "next/link";
import { FC } from "react";

export const DecisionsPage: FC = () => {
  return (
    <div style={{ padding: "0 32px" }}>
      <StyledText variant="h2">
        Do you make decisions with your head or your heart?
      </StyledText>
      <Link href={SCAN_ROUTE}>
        <StyledButton commonColor styles={{ marginTop: 26 }}>
          Heart
        </StyledButton>
      </Link>
      <Link href={SCAN_ROUTE}>
        <StyledButton styles={{ marginTop: 12 }} commonColor>
          Head
        </StyledButton>
      </Link>
      <Link href={SCAN_ROUTE}>
        <StyledButton styles={{ marginTop: 12 }} commonColor>
          Both
        </StyledButton>
      </Link>
    </div>
  );
};
