import { CSSProperties, ReactNode } from "react";

export type ModalPositionType = "center" | "bottom";

export interface ModalProps {
  position: ModalPositionType;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  style?: CSSProperties;
}
