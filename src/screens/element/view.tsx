"use client";

import { COLOR_ROUTE } from "@/config/routes/lib";
import { StyledButton } from "@/shared/componets/styled-button/view";
import { StyledText } from "@/shared/componets/styled-text";
import Link from "next/link";
import { FC } from "react";
import Ic_Water from "@/assets/icons/ic_water.svg";
import Ic_Earh from "@/assets/icons/ic_earth.svg";
import Ic_Fire from "@/assets/icons/ic_fire.svg";
import Ic_Air from "@/assets/icons/ic_air.svg";
import Image from "next/image";

export const ElementPage: FC = () => {
  return (
    <div>
      <StyledText variant="h2">
        Which element resonates with you the most?
      </StyledText>
      <Link href={COLOR_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          commonColor
          styles={{ marginTop: 26, textAlign: "left" }}
          icon={<Image src={Ic_Earh} alt={"Earth Element"} />}
        >
          <div>Earth</div>
        </StyledButton>
      </Link>
      <Link href={COLOR_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={<Image src={Ic_Water} alt={"Water Element"} />}
          commonColor
        >
          <div>Water</div>
        </StyledButton>
      </Link>
      <Link href={COLOR_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={<Image src={Ic_Air} alt={"Air Element"} />}
          commonColor
        >
          <div>Air</div>
        </StyledButton>
      </Link>
      <Link href={COLOR_ROUTE} style={{ textDecoration: "none" }}>
        <StyledButton
          styles={{ marginTop: 12, textAlign: "left" }}
          icon={<Image src={Ic_Fire} alt={"Fire Element"} />}
          commonColor
        >
          <div>Fire</div>
        </StyledButton>
      </Link>
    </div>
  );
};
