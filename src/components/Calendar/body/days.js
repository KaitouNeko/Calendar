import React, { useMemo, useCallback, memo } from "react";

// hook utils
import { useAppContext, useThemeContext } from "@@hook";
import { getDateApi } from "@@utils";

const Days = () => {
  const { date, setDate, selectedDate, setSelectedDate } = useAppContext();
  const { datePickerTheme, setDatePickerStatueOpen } = useThemeContext();

  const { year, month } = date;
  const {
    day: selectedDay,
    month: selectedMonth,
    year: selectedYear
  } = selectedDate;

  const getLast = useMemo(() => {
    return getDateApi.getLastRange(year, month);
  }, [year, month]);

  const getNext = useMemo(() => {
    return getDateApi.getNextRange(year, month);
  }, [year, month]);

  const getCurrent = useMemo(() => {
    return getDateApi.getCurrentRange(year, month);
  }, [year, month]);

  const onSelect = useCallback(
    (year, month, day) => {
      setDate({ year, month, day });
      setSelectedDate({ year, month, day });
      datePickerTheme && setDatePickerStatueOpen(true);
    },
    [setDate, setSelectedDate, setDatePickerStatueOpen, datePickerTheme]
  );

  return (
    <React.Fragment>
      {getLast.map((ele, idx) => {
        return (
          <a
            key={idx}
            className={`${ele.className}`}
            onClick={() => onSelect(ele.year, ele.month, ele.day)}
          >
            {ele.day}
          </a>
        );
      })}
      {getCurrent.map((ele, idx) => {
        let selected = "";
        if (
          selectedDay === ele.day &&
          ele.year === selectedYear &&
          ele.month === selectedMonth
        ) {
          selected = "active";
        }
        return (
          <a
            key={idx}
            className={`${ele.className} ${selected}`}
            onClick={() => onSelect(ele.year, ele.month, ele.day)}
          >
            {ele.day}
          </a>
        );
      })}
      {getNext.map((ele, idx) => {
        return (
          <a
            key={idx}
            className={`${ele.className}`}
            onClick={() => onSelect(ele.year, ele.month, ele.day)}
          >
            {ele.day}
          </a>
        );
      })}
    </React.Fragment>
  );
};

export default memo(Days);
