import React, { useEffect, useState, useMemo, createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const { DatePicker } = props;
  const [datePickerTheme, setDatePickerTheme] = useState(DatePicker);
  const [datePickerStatueOpen, setDatePickerStatueOpen] = useState(false);

  useEffect(() => {
    if (datePickerTheme) {
      setDatePickerStatueOpen(true);
    }
  }, [datePickerTheme]);

  const value = useMemo(
    () => ({
      datePickerTheme,
      setDatePickerTheme,
      datePickerStatueOpen,
      setDatePickerStatueOpen
    }),
    [datePickerTheme, datePickerStatueOpen]
  );
  return <ThemeContext.Provider value={value} {...props} />;
}

ThemeProvider.propTypes = {
  originalDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  DatePicker: PropTypes.bool
};
