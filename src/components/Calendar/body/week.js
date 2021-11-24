import React, {memo} from "react";
const Week = () => {
  return (
    <div className="week">
      <a>Su</a>
      <a>Mo</a>
      <a>Tu</a>
      <a>We</a>
      <a>Th</a>
      <a>Fr</a>
      <a>Sa</a>
    </div>
  );
};
export default memo(Week);
