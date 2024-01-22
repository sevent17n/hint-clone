"use client";

import { useScanResult } from "@/shared/context/scan-result-context";
import { FC } from "react";
import { redirect } from "next/navigation";
import { TAKE_A_PHOTO_ROUTE } from "@/config/routes/lib";
import { ScanResult } from "@/widgets/scan-result";

export const ScanResultPage: FC = () => {
  const { image } = useScanResult();

  if (!image) redirect(TAKE_A_PHOTO_ROUTE);

  return <ScanResult />;
};
