import React, { useMemo, useCallback, memo } from "react";

// hook utils
import { useAppContext } from "@@hook";
import { getMonths } from "@@utils";

const Months = () => {
  const { date, setDate, setLayoutType } = useAppContext();
  const { year, month } = date;
  const getMonth = useMemo(() => {
    return getMonths(year);
  }, [year]);

  const onSelect = useCallback(
    userSelectMonth => {
      setLayoutType("selectDay");
      setDate({
        year,
        month: userSelectMonth
      });
    },
    [setLayoutType, setDate, year]
  );

  return (
    <React.Fragment>
      {getMonth.map((ele, idx) => {
        let selected = "";
        let userSelectMonth = idx + 1;
        if (ele.year === year && userSelectMonth === month) {
          selected = "active";
        }
        return (
          <a
            key={`${idx}`}
            className={`${ele.className} ${selected}`}
            onClick={() => onSelect(userSelectMonth)}
          >
            {ele.month}
          </a>
        );
      })}
    </React.Fragment>
  );
};

export default memo(Months);
