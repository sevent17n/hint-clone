"use client";

import { FC } from "react";
import Image from "next/image";
import Ic_Trusted from "@/assets/icons/ic_trusted.svg";

export const PrivacyWarning: FC = () => {
  return (
    <div>
      <p
        style={{
          color: "#121620",
          fontSize: 14,
          fontWeight: 400,
          marginTop: 10,
        }}
      >
        <span>
          <Image src={Ic_Trusted} alt={"trusted"} />
        </span>{" "}
        No biometric data collected. All recognition process performs on your
        device.
      </p>
    </div>
  );
};
