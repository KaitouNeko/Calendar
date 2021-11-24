import React, { memo } from "react";

// hook Context
import { useAppContext } from "@@hook";
// local modules
import Week from "./week";
import Days from "./days";
import Months from "./months";
import Years from "./years";
import "./style.scss";

const CalendarBody = () => {
  const { layoutType } = useAppContext();
  return (
    <section className={`calendar_body ${layoutType}`}>
      {layoutType === "selectDay" && <Week />}
      <div className="calendar_main">
        {layoutType === "selectDay" && <Days />}
        {layoutType === "selectMonth" && <Months />}
        {layoutType === "selectYear" && <Years />}
      </div>
    </section>
  );
};

export default memo(CalendarBody);
