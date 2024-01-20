import { CSSProperties, ReactNode } from "react";

export type VarintTextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface StyledTextProps {
  children: ReactNode;
  variant: VarintTextType;
  styles?: CSSProperties;
}
