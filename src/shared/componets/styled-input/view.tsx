import { FC, forwardRef } from "react";
import { StyledInputProps, StyledInputPropsWithRef } from "./types";
import styles from "./styles.module.scss";

export const StyledInput: FC<StyledInputPropsWithRef> = forwardRef<
  HTMLInputElement,
  StyledInputProps
>(
  (
    {
      isError,
      isDisabled,
      type,
      value,
      placeholder,
      onChange,
      onFocus,
      isAlignCenter,
      defaultValue,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <input
        {...props}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        disabled={isDisabled}
        defaultValue={defaultValue}
        className={styles.input}
      />
    );
  }
);

StyledInput.displayName = "StyledInput";
