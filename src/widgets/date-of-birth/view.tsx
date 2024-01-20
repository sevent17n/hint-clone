"use server";
import { StyledText } from "@/shared/componets/styled-text";
import { FC } from "react";
import { Selector } from "./lib/selector";

export const DateOfBirth: FC = () => {
  return (
    <div>
      <StyledText variant="h2">What’s your date of birth?</StyledText>
      <StyledText variant="h3">
        Your birth date reveals your core personality traits, needs and desires.
      </StyledText>
      <Selector />
    </div>
  );
};
