import React, { useMemo, useCallback, memo } from "react";

// hook utils
import { useAppContext } from "@@hook";
import { enMonth, getDateApi } from "@@utils";
import HeaderLayout from "./headerlayout";

const HeaderDay = () => {
  const { date, setDate, setLayoutType } = useAppContext();
  const { year, month } = date;

  const LastMonth = useMemo(() => {
    return getDateApi.getLastMonth(year, month);
  }, [year, month]);
  const NextMonth = useMemo(() => {
    return getDateApi.getNextMonth(year, month);
  }, [year, month]);

  const onPrev = useCallback(() => {
    setDate({
      year: LastMonth[0],
      month: LastMonth[1]
    });
  }, [setDate, LastMonth]);

  const onNext = useCallback(() => {
    setDate({
      year: NextMonth[0],
      month: NextMonth[1]
    });
  }, [setDate, NextMonth]);

  const onBack = useCallback(() => {
    setLayoutType("selectMonth");
  }, [setLayoutType]);

  return (
    <HeaderLayout
      onPrev={onPrev}
      onBack={onBack}
      onNext={onNext}
      dateTitle={`${enMonth(date.month)} ${date.year}`}
    />
  );
};

export default memo(HeaderDay);
