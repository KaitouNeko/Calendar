const getDateApi = {
  getFirstday: function(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    return firstDay.getDay();
  },
  getLastday: function(year, month) {
    const lastDay = new Date(year, month, 0);
    return lastDay.getDate();
  },
  getLastMonth: function(year, month) {
    if (month === 1) {
      year -= 1;
      month = 12;
    } else {
      month -= 1;
    }
    return [year, month];
  },
  getNextMonth: function(year, month) {
    if (month === 12) {
      year += 1;
      month = 1;
    } else {
      month += 1;
    }
    return [year, month];
  },
  getLastYear: function(year) {
    const lastyear = year - 1;
    return lastyear;
  },
  getNextYear: function(year) {
    const nextyear = year + 1;
    return nextyear;
  },
  getCurrentRange: function(year, month) {
    const currentLastDay = this.getLastday(year, month); // 取得每月最後一天是幾號
    const data = Array.from({ length: currentLastDay }).map((item, index) => {
      if (item === undefined) {
        item = {};
        item["className"] = `current`;
        item["year"] = year;
        item["month"] = month;
        item["day"] = index + 1;
      }
      return item;
    });
    return data;
  },
  getLastRange: function(year, month) {
    const lastMonth = this.getLastMonth(year, month); // 取得上個月份
    const getFirstday = this.getFirstday(year, month); // 取得每月第一天是星期幾
    const lastMonthLastDay = parseInt(
      this.getLastday(lastMonth[0], lastMonth[1])
    ); // 取得上個月最後一天
    const data = Array.from({ length: getFirstday }).map((item, index) => {
      if (item === undefined) {
        item = {};
        item["className"] = `last`;
        item["year"] = lastMonth[0];
        item["month"] = lastMonth[1];
        item["day"] = lastMonthLastDay - (getFirstday - (index + 1));
      }
      return item;
    });
    return data;
  },
  getNextRange: function(year, month) {
    const NextMonth = this.getNextMonth(year, month); // 取得下個月份
    const getLastRange = this.getLastRange(year, month);
    const getCurrentRange = this.getCurrentRange(year, month);
    const getDateRange = getLastRange.concat(getCurrentRange);
    const data = Array.from({ length: 42 - getDateRange.length }).map(
      (item, index) => {
        if (item === undefined) {
          item = {};
          item["className"] = `next`;
          item["year"] = NextMonth[0];
          item["month"] = NextMonth[1];
          item["day"] = index + 1;
        }
        return item;
      }
    );
    return data;
  }
};
export default getDateApi;

export function getYears(year) {
  const modNum = (year - 1910) % 10;
  const firstYear = year - modNum - 1;
  const data = Array.from({ length: 12 }).map((item, index) => {
    if (item === undefined) {
      let setClass = "ten_years";
      if (index === 0) {
        setClass = "last";
      }
      if (index === 11) {
        setClass = "next";
      }
      item = {};
      item["className"] = `${setClass}`;
      item["year"] = firstYear + index;
    }
    return item;
  });
  return data;
}

export function getMonths(year) {
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
  const data = Array.from({ length: 12 }).map((item, index) => {
    if (item === undefined) {
      item = {};
      item["className"] = "month";
      item["year"] = year;
      item["month"] = `${setMonth[index]}`;
    }
    return item;
  });
  return data;
}

export function tenYearRange(year) {
  const modNum = (year - 1910) % 10;
  const firstYear = year - modNum;
  const lastYear = firstYear + 9;
  return `${firstYear}-${lastYear}`;
}
export function nextTenYear(year) {
  let modNum = (year - 1910) % 10;
  let currentFirstYear = year - modNum + 10;
  return currentFirstYear;
}
export function lastTenYear(year) {
  let modNum = (year - 1910) % 10;
  let currentFirstYear = year - modNum - 1;
  return currentFirstYear;
}
