const moment = require("moment");

export function validateDate(date) {
  const today = moment(Date.now()).format("YYYY-MM-DD");
  return moment(date, "YYYY-MM-DD", true).isValid() && today <= date;
}

export function validateTime(time) {
  return moment(time, "HH:mm", true).isValid();
}
