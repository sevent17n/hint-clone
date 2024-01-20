import { InputHTMLAttributes, Ref } from "react";

export interface StyledInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isDisabled?: boolean;
  isAlignCenter?: boolean;
}

export interface StyledInputPropsWithRef extends StyledInputProps {
  ref?: Ref<HTMLInputElement>;
}
