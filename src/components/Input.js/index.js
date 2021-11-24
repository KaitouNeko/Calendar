import React, { useEffect, useCallback, memo, useState } from "react";
import PropTypes from "prop-types";

// hook utils
import { useThemeContext } from "@@hook";
import "./style.scss";

const Input = ({ id, type, placeholder, initFocus, myRef, ...props }) => {
  const { inputValue, setInputValue } = useState("");
  const { datePickerStatueOpen, setDatePickerStatueOpen } = useThemeContext();
  useEffect(() => {
    if (initFocus && myRef) {
      myRef.current.focus();
    }
  }, [initFocus, myRef]);
  const onChange = useCallback(() => {
    setInputValue(myRef.current.value);
  }, [myRef, setInputValue]);

  const onClick = useCallback(() => {
    setDatePickerStatueOpen(!datePickerStatueOpen);
  }, [datePickerStatueOpen, setDatePickerStatueOpen]);

  if (!myRef) return;

  return (
    <label className="Inpt" onClick={() => onClick()}>
      <input
        id={id}
        type={type}
        ref={myRef}
        value={inputValue}
        placeholder={placeholder}
        onFocus={props.onFocus}
        onChange={() => onChange()}
        onKeyPress={props.onKeyPress}
        {...props}
      />
    </label>
  );
};

Input.defaultProps = {
  id: "",
  type: "text",
  placeholder: "YYYY-MM-DD",
  initFocus: false,
  onClick: () => {
    // console.log("onClick");
  },
  onFocus: () => {
    // console.log("onFocus");
  },
  onChange: () => {
    // console.log("onChange");
  },
  onKeyPress: () => {
    // console.log("onKeyPress");
  }
};
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  initFocus: PropTypes.bool,
  myRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};
export default memo(Input);
