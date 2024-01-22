"use client";

import { createContext } from "react";
import { IScanResultContext } from "./types";

export const ScanResultContext = createContext<IScanResultContext | undefined>(
  undefined
);
