"use client";
import { PALM_INFO_ABOUT_ROUTE } from "@/config/routes/lib";
import { DateSelector } from "@/features/date-selector";
import { StyledButton } from "@/shared/componets/styled-button/view";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { isValid, parse, getDaysInMonth } from "date-fns";

export const Selector: FC = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const currentDay = currentDate.getDate().toString().padStart(2, "0");

  const [year, setYear] = useState<string>(currentYear);
  const [month, setMonth] = useState<string>(currentMonth);
  const [day, setDay] = useState<string>(currentDay);

  useEffect(() => {
    setYear(currentYear);
    setMonth(currentMonth);
    setDay(currentDay);
  }, [currentYear, currentMonth, currentDay]);

  const isValidDate = (year: string, month: string, day: string): boolean => {
    if (!year || !month || !day) return false;

    try {
      const dateStr = `${year}-${month}-${day}`;
      const parsedDate = parse(dateStr, "yyyy-MM-dd", new Date());
      return isValid(parsedDate);
    } catch (error) {
      return false;
    }
  };

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  const handleMonthChange = (value: string) => {
    setMonth(value);
  };

  const handleDayChange = (value: string) => {
    setDay(value);
  };

  const isButtonActive = year && month && day && isValidDate(year, month, day);

  return (
    <div style={{ marginTop: 24 }}>
      <DateSelector
        year={year}
        month={month}
        day={day}
        setDay={handleDayChange}
        setYear={handleYearChange}
        setMonth={handleMonthChange}
      />
      <Link href={isButtonActive ? PALM_INFO_ABOUT_ROUTE : "#"}>
        <StyledButton styles={{ marginTop: 24 }} disabled={!isButtonActive}>
          Next
        </StyledButton>
      </Link>
    </div>
  );
};
