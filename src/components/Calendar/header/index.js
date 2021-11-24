import React, { memo } from "react";

// hook utils
import { useAppContext } from "@@hook";
import HeaderDay from "./headerday";
import HeaderMonth from "./headermonth";
import HeaderYear from "./headeryear";
import "./style.scss";

const CalendarHeader = () => {
  const { layoutType } = useAppContext();
  return (
    <section className={`calendar_header ${layoutType}`}>
      {layoutType === "selectDay" && <HeaderDay />}
      {layoutType === "selectMonth" && <HeaderMonth />}
      {layoutType === "selectYear" && <HeaderYear />}
    </section>
  );
};

export default memo(CalendarHeader);
