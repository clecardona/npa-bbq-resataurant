const moment = require("moment");

export function validateDate(date) {
  const today = moment(Date.now()).format("YYYY-MM-DD");
  return moment(date, "YYYY-MM-DD", true).isValid() && today <= date;
}

export function validateTime(time) {
  return moment(time, "HH:mm", true).isValid();
}

export function validateDescription(description) {
  return 10 < description.trim().length && description.trim().length < 150;
}

export function validateTitle(title, categories) {
  const titleExists = titleFinder(title, categories);
  return title.trim().length > 3 && titleExists === (null || undefined);
}

function titleFinder(title, array) {
  if (title.length > 0) {
    return array.filter((item) => {
      return item.title.toLowerCase() === title.toLowerCase();
    })[0];
  }
}

export function validatePrice(price) {
  return (
    price.length > 0 && Number.isInteger(parseInt(price)) && parseInt(price) > 0
  );
}

export function validateAll(items) {}
