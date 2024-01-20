"use client";
import { FC } from "react";
import { StageBarProps } from "./types";
import { usePathname } from "next/navigation";
import { StageBar } from "./lib/stage-bar";
import { HOME_PAGE_ROUTE } from "@/config/routes/lib";

export const StageBarProvider: FC<StageBarProps> = ({ children }) => {
  const pathname = usePathname();
  const is_home_page = pathname === HOME_PAGE_ROUTE;

  return (
    <div>
      {!is_home_page && <StageBar />}
      {children}
    </div>
  );
};
