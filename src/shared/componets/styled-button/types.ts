import { CSSProperties, ReactNode } from "react";

export interface StyledButtonProps {
  onClick?: (...args: any) => void;
  disabled?: boolean;
  commonColor?: boolean;
  children?: ReactNode;
  styles?: CSSProperties;
  icon?: ReactNode;
}
