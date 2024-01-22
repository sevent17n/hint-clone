"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Instructions from "@/assets/images/instructions.jpg";
import { StyledText } from "@/shared/componets/styled-text";
import { StyledButton } from "@/shared/componets/styled-button";
import { PrivacyWarning } from "@/shared/componets/privacy-warning";
import { UploadModal } from "@/entities/upload-modal";

export const TakeAPhoto: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <StyledText variant="h2">Take your palm picture as instructed</StyledText>
      <Image
        src={Instructions}
        alt={"Instructions"}
        style={{ marginTop: 24 }}
      />
      <div style={{ maxWidth: 400, marginTop: 24, textAlign: "left" }}>
        <StyledButton onClick={() => setOpen(true)}>
          Take a picture now
        </StyledButton>
        <PrivacyWarning />
      </div>
      <UploadModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
