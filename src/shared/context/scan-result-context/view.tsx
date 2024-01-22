"use client";

import { ReactNode, useState } from "react";
import { IScanResultContext } from "./types";
import { ScanResultContext } from "./context";
import { Hand } from "@tensorflow-models/hand-pose-detection";

export const ScanResultProvider = ({ children }: { children: ReactNode }) => {
  const [hand, setHand] = useState<Hand | null>(null);
  const [image, setImage] = useState<Blob | null>(null);

  const contextValue: IScanResultContext = {
    hand,
    setHand,
    image,
    setImage,
  };

  return (
    <ScanResultContext.Provider value={contextValue}>
      {children}
    </ScanResultContext.Provider>
  );
};
