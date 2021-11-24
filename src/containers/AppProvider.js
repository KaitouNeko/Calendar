import React, { useEffect, useState, useMemo, createContext } from "react";
import PropTypes from "prop-types";
import { formateDateToObject, formateDateToStr } from "@@utils";
export const AppContext = createContext();

export function AppProvider(props) {
  const { originalDate, myRef } = props;
  const formateDate = formateDateToObject(originalDate);

  const [date, setDate] = useState(formateDate);
  const [selectedDate, setSelectedDate] = useState(formateDate);

  useEffect(() => {
    const formateDate = formateDateToObject(originalDate);
    setDate(formateDate);
    setSelectedDate(formateDate);
  }, [originalDate]);

  useEffect(() => {
    const { year, month, day } = selectedDate;
    if (myRef && myRef.current !== undefined) {
      myRef.current.value = formateDateToStr(year, month, day);
    }
  }, [myRef, selectedDate]);

  // selectDay selectMonth
  const [layoutType, setLayoutType] = useState("selectDay");

  const value = useMemo(
    () => ({
      date,
      setDate,
      layoutType,
      setLayoutType,
      selectedDate,
      setSelectedDate
    }),
    [date, layoutType, selectedDate]
  );
  return <AppContext.Provider value={value} {...props} />;
}

AppProvider.propTypes = {
  originalDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  myRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};
