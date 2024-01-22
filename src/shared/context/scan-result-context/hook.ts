"use client";

import { ScanResultContext } from "./context";
import { useContext } from "react";

export const useScanResult = () => {
  const context = useContext(ScanResultContext);
  if (!context) {
    throw new Error("useScanResult must be used within a ScanREsultProvider");
  }

  return context;
};
