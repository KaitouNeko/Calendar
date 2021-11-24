import React, { useMemo, useCallback, memo } from "react";

// hook utils
import { useAppContext } from "@@hook";
import { lastTenYear, nextTenYear, tenYearRange } from "@@utils";
import HeaderLayout from "./headerlayout";

const HeaderYear = () => {
  const { date, setDate, setLayoutType } = useAppContext();
  const { year } = date;

  const lastYears = useMemo(() => {
    return lastTenYear(year);
  }, [year]);

  const nextYears = useMemo(() => {
    return nextTenYear(year);
  }, [year]);
  const tenYearRangeTitle = useMemo(() => {
    return tenYearRange(year);
  }, [year]);

  const onPrev = useCallback(() => {
    setDate({
      year: lastYears
    });
  }, [setDate, lastYears]);

  const onNext = useCallback(() => {
    setDate({
      year: nextYears
    });
  }, [setDate, nextYears]);
  const onBack = useCallback(() => {
    setLayoutType("selectMonth");
  }, [setLayoutType]);

  return (
    <HeaderLayout
      onPrev={onPrev}
      onBack={onBack}
      onNext={onNext}
      dateTitle={`${tenYearRangeTitle}`}
    />
  );
};

export default memo(HeaderYear);
