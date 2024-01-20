import { FC, ReactElement, ReactNode } from "react";
import { StyledTextProps } from "./types";
import baseStyles from "./styles.module.scss";

export const StyledText: FC<StyledTextProps> = ({
  variant,
  children,
  styles,
}): ReactNode => {
  let RcomponentToRender: ReactElement = <p style={styles}>{children}</p>;

  switch (variant) {
    case "h1":
      RcomponentToRender = (
        <h1 className={baseStyles.h1} style={styles}>
          {children}
        </h1>
      );
      break;
    case "h2":
      RcomponentToRender = (
        <h2 className={baseStyles.h2} style={styles}>
          {children}
        </h2>
      );
      break;
    case "h3":
      RcomponentToRender = (
        <h3 className={baseStyles.h3} style={styles}>
          {children}
        </h3>
      );
      break;
    case "h4":
      RcomponentToRender = (
        <h4 className={baseStyles.h4} style={styles}>
          {children}
        </h4>
      );
      break;
    case "h5":
      RcomponentToRender = (
        <h5 className={baseStyles.h5} style={styles}>
          {children}
        </h5>
      );
      break;
    case "h6":
      RcomponentToRender = (
        <h6 className={baseStyles.h5} style={styles}>
          {children}
        </h6>
      );
      break;
    case "p":
      RcomponentToRender = (
        <p className={baseStyles.h5} style={styles}>
          {children}
        </p>
      );
      break;
    default:
      RcomponentToRender = (
        <p className={baseStyles.h5} style={styles}>
          {children}
        </p>
      );
      break;
  }

  return <>{RcomponentToRender}</>;
};
