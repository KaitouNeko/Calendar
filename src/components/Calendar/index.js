import React, { useState, useRef, useCallback, memo } from "react";
import PropTypes from "prop-types";

// hook utils
import { dateValidationCheck } from "@@utils";
// local modules
import { ThemeProvider } from "@@containers";
import { Input, CalendarCore } from "@@components";

import "./style.scss";

const Calendar = ({ date = new Date(), isDatePicker = false }) => {
  const [entryDate, setEntryDate] = useState(date);
  let dateRef = useRef();

  const validation = useCallback(async () => {
    if (!dateRef.current) return;
    try {
      await dateValidationCheck(dateRef.current.value)
        .then(res => {
          if (res) {
            setEntryDate(dateRef.current.value);
          }
        })
        .catch(error => alert(`${error}`));
    } catch (err) {
      console.log(err);
    }
  }, [dateRef]);

  return (
    <ThemeProvider DatePicker={isDatePicker}>
      {isDatePicker && (
        <Input
          id="userInputDate"
          initFocus
          myRef={dateRef}
          onKeyPress={e => {
            if (e.key === "Enter") {
              validation();
            }
          }}
        />
      )}
      <CalendarCore date={entryDate} myRef={dateRef} />
    </ThemeProvider>
  );
};
Calendar.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isDatePicker: PropTypes.bool
};

export default memo(Calendar);
