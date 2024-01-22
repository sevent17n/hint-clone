"use server";

import { DATE_OF_BIRTH_ROUTE } from "@/config/routes/lib";
import { StyledButton } from "@/shared/componets/styled-button";
import { StyledText } from "@/shared/componets/styled-text";
import Link from "next/link";
import { FC } from "react";

export const GenderPage: FC = () => {
  return (
    <main>
      <StyledText variant="h2">What’s your gender?</StyledText>
      <StyledText styles={{ marginTop: 26 }} variant="h3">
        In Palmistry, everyone is a blend of masculine and feminine, so it helps
        to know yours.
      </StyledText>
      <Link href={DATE_OF_BIRTH_ROUTE}>
        <StyledButton styles={{ marginTop: 26 }} commonColor={true}>
          Male
        </StyledButton>
      </Link>
      <Link href={DATE_OF_BIRTH_ROUTE}>
        <StyledButton styles={{ marginTop: 12 }} commonColor={true}>
          Female
        </StyledButton>
      </Link>
    </main>
  );
};
