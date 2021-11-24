import React, { memo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { useThemeContext } from "@@hook";
// local modules
import { AppProvider } from "@@containers";
import CalendarHeader from "./header";
import CalendarBody from "./body";
import "./style.scss";

const CalendarCore = ({ date = new Date(), myRef }) => {
  const { datePickerStatueOpen } = useThemeContext();
  return (
    <AppProvider originalDate={date} myRef={myRef}>
      <div className={cx("Calendar", { datepicker: datePickerStatueOpen })}>
        <CalendarHeader />
        <CalendarBody />
      </div>
    </AppProvider>
  );
};
CalendarCore.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  myRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default memo(CalendarCore);
