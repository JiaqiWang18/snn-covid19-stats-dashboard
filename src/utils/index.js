export const setDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

//format date into yyyy-mm-dd for API use
export const formatAPIDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formatDisplayDate = (dateObj) =>
  formatAPIDate(dateObj).replaceAll("-", "/");

export const apiToDisplay = (udnerscored_case) =>
  (udnerscored_case = udnerscored_case
    .replaceAll("_", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase()));
