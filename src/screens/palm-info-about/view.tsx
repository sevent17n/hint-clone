"use client";

import { FC } from "react";
import Ic_ZodiakHand from "@/assets/icons/ic_zodiak_palm.svg";
import { StyledText } from "@/shared/componets/styled-text";
import Link from "next/link";
import { StyledButton } from "@/shared/componets/styled-button/view";
import { WISHES_ROUTE } from "@/config/routes/lib";
import Image from "next/image";
export const PalmInfoAboutPage: FC = () => {
  return (
    <div>
      <Image src={Ic_ZodiakHand} alt={"Palm"} />

      <StyledText variant="h2" styles={{ marginTop: 26 }}>
        Your palms hold a wealth of information about your fate and personality
      </StyledText>
      <Link href={WISHES_ROUTE}>
        <StyledButton styles={{ marginTop: 26 }}>Continue</StyledButton>
      </Link>
    </div>
  );
};
