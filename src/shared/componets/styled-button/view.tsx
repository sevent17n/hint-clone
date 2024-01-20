import { FC } from "react";
import { StyledButtonProps } from "./types";
import className from "./styles.module.scss";
import clsx from "clsx";

export const StyledButton: FC<StyledButtonProps> = ({
  children,
  onClick,
  disabled = false,
  commonColor,
  styles,
  icon,
}) => {
  return (
    <button
      style={{ ...styles }}
      className={clsx(className.button, {
        [className.button_icon]: icon,
        [className.button_blue]: !disabled && !commonColor,
        [className.button_gray]: !disabled && commonColor,
        [className.button_disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <>{icon}</> {children}
    </button>
  );
};
