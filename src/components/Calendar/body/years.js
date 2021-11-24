import React, { useMemo, useCallback, memo } from "react";

// hook utils
import { useAppContext } from "@@hook";
import { getYears } from "@@utils";

const Years = () => {
  const {
    date,
    setDate,
    setLayoutType,
    selectedDate,
    setSelectedDate
  } = useAppContext();
  const { year: selectedYear } = selectedDate;
  const { year } = date;
  const getYear = useMemo(() => {
    return getYears(year);
  }, [year]);

  const onSelect = useCallback(
    userSelectYear => {
      setLayoutType("selectMonth");
      setDate({
        year: userSelectYear
      });
      setSelectedDate({
        year: userSelectYear
      });
    },
    [setLayoutType, setDate, setSelectedDate]
  );

  return (
    <React.Fragment>
      {getYear.map((ele, idx) => {
        let selected = "";
        if (ele.year === selectedYear) {
          selected = "active";
        }
        return (
          <a
            key={`${idx}`}
            className={`${ele.className} ${selected}`}
            onClick={() => onSelect(ele.year)}
          >
            {ele.year}
          </a>
        );
      })}
    </React.Fragment>
  );
};

export default memo(Years);
