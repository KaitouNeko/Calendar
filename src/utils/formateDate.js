export function formateDateToObject(originalDate = new Date()) {
  let day;
  let year;
  let month;
  if (typeof originalDate === "string") {
    originalDate = new Date(originalDate);
  }
  day = originalDate.getDate();
  year = originalDate.getFullYear();
  month = originalDate.getMonth() + 1;
  return {
    year,
    month,
    day
  };
}
export function formateDateToStr(year, month, day) {
  if (month && month <= 9) month = `0${month}`;
  if (day && day <= 9) day = `0${day}`;

  if (day === undefined && month === undefined) {
    return `${year}`;
  } else if (day === undefined) {
    return `${year}-${month}`;
  }
  return `${year}-${month}-${day}`;
}

export function enMonth(month) {
  const setMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return setMonth[month - 1];
}
