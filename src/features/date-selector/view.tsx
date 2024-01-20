import { StyledInput } from "@/shared/componets/styled-input";
import { FC } from "react";
import styles from "./styles.module.scss";
import { DateSelectorProps } from "./types";

export const DateSelector: FC<DateSelectorProps> = ({
  year,
  setDay,
  setMonth,
  setYear,
  month,
  day,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <p className={styles.text_sm}>Year</p>
        <StyledInput
          onChange={(e) => setYear(e.target.value)}
          value={year}
          placeholder="YYYY"
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.text_sm}>Month</p>
        <StyledInput
          onChange={(e) => setMonth(e.target.value)}
          value={month}
          placeholder="MM"
        />
      </div>
      <div className={styles.input_container}>
        <p className={styles.text_sm}> Day</p>
        <StyledInput
          onChange={(e) => setDay(e.target.value)}
          value={day}
          placeholder="DD"
        />
      </div>
    </div>
  );
};
