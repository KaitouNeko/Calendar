import React, { memo } from "react";
import PropTypes from "prop-types";

const HeaderLayout = ({ onPrev, onBack, onNext, dateTitle }) => {
  return (
    <React.Fragment>
      <a className="prevArrow" onClick={() => onPrev()}>
        {"<"}
      </a>
      <a onClick={() => onBack()}>{`${dateTitle}`}</a>
      <a className="nextArrow" onClick={() => onNext()}>
        {">"}
      </a>
    </React.Fragment>
  );
};

HeaderLayout.propTypes = {
  dateTitle: PropTypes.string,
  onPrev: PropTypes.func,
  onBack: PropTypes.func,
  onNext: PropTypes.func
};

export default memo(HeaderLayout);
