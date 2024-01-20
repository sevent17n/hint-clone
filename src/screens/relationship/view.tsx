"use server";
import { ELEMENT_ROUTE } from "@/config/routes/lib";
import { StyledButton } from "@/shared/componets/styled-button/view";
import { StyledText } from "@/shared/componets/styled-text";
import Link from "next/link";
import { FC } from "react";

export const RelationShipPage: FC = () => {
  return (
    <div style={{ padding: "0 32px" }}>
      <StyledText variant="h2">
        So we can get to know you better, please tell us your relationship
        status.
      </StyledText>
      <Link href={ELEMENT_ROUTE}>
        <StyledButton commonColor styles={{ marginTop: 26 }}>
          Single
        </StyledButton>
      </Link>
      <Link href={ELEMENT_ROUTE}>
        <StyledButton styles={{ marginTop: 12 }} commonColor>
          In a relationship
        </StyledButton>
      </Link>
    </div>
  );
};
