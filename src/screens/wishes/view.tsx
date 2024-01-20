"use server";
import { RELATIONSHIP_ROUTE } from "@/config/routes/lib";
import { StyledButton } from "@/shared/componets/styled-button/view";
import { StyledText } from "@/shared/componets/styled-text";
import Link from "next/link";
import { FC } from "react";

export const WishesPage: FC = () => {
  return (
    <div style={{ padding: "0 32px" }}>
      <StyledText variant="h2">
        What aspects of your life do you wish to gain insight into through
        palmistry?
      </StyledText>
      <Link href={RELATIONSHIP_ROUTE}>
        <StyledButton commonColor styles={{ marginTop: 26 }}>
          Love & Relationship
        </StyledButton>
      </Link>
      <Link href={RELATIONSHIP_ROUTE}>
        <StyledButton styles={{ marginTop: 12 }} commonColor>
          Health & Vitality
        </StyledButton>
      </Link>
      <Link href={RELATIONSHIP_ROUTE}>
        <StyledButton styles={{ marginTop: 12 }} commonColor>
          Career & Destiny
        </StyledButton>
      </Link>
    </div>
  );
};
