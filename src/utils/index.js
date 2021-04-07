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

function commarize() {
  // Alter numbers larger than 1k
  if (this >= 1e3) {
    var units = ["k", "M", "B", "T"];

    // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
    let unit = Math.floor((this.toFixed(0).length - 1) / 3) * 3;
    // Calculate the remainder
    var num = (this / ("1e" + unit)).toFixed(2);
    var unitname = units[Math.floor(unit / 3) - 1];

    // output number remainder + unitname
    return num + unitname;
  }

  // return formatted original number
  return this.toLocaleString();
}

// Add method to prototype. this allows you to use this function on numbers and strings directly
Number.prototype.commarize = commarize;
String.prototype.commarize = commarize;
