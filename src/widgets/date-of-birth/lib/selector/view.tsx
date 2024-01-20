"use client";
import { PALM_INFO_ABOUT_ROUTE } from "@/config/routes/lib";
import { DateSelector } from "@/features/date-selector";
import { StyledButton } from "@/shared/componets/styled-button/view";
import Link from "next/link";
import { FC, useState } from "react";

export const Selector: FC = () => {
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");

  const is_button_active = year && month && day;

  return (
    <div style={{ marginTop: 24 }}>
      <DateSelector
        year={year}
        month={month}
        day={day}
        setDay={setDay}
        setYear={setYear}
        setMonth={setMonth}
      />
      <Link href={is_button_active && PALM_INFO_ABOUT_ROUTE}>
        <StyledButton styles={{ marginTop: 24 }} disabled={!is_button_active}>
          Next
        </StyledButton>
      </Link>
    </div>
  );
};
