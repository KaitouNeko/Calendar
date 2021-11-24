import React, { useMemo, useCallback, memo } from "react";

// hook utils
import { useAppContext } from "@@hook";
import { getDateApi } from "@@utils";
import HeaderLayout from "./headerlayout";

const HeaderMonth = () => {
  const { date, setDate, setLayoutType } = useAppContext();
  const { year } = date;

  const LastYear = useMemo(() => {
    return getDateApi.getLastYear(year);
  }, [year]);

  const NextYear = useMemo(() => {
    return getDateApi.getNextYear(year);
  }, [year]);

  const onPrev = useCallback(() => {
    setDate({
      year: LastYear
    });
  }, [setDate, LastYear]);

  const onNext = useCallback(() => {
    setDate({
      year: NextYear
    });
  }, [setDate, NextYear]);
  const onBack = useCallback(() => {
    setLayoutType("selectYear");
  }, [setLayoutType]);

  return (
    <HeaderLayout
      onPrev={onPrev}
      onBack={onBack}
      onNext={onNext}
      dateTitle={`${date.year}`}
    />
  );
};

export default memo(HeaderMonth);
