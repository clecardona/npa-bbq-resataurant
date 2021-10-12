const moment = require("moment");

export function valDate(date) {
  const today = moment(Date.now()).format("YYYY-MM-DD");
  return moment(date, "YYYY-MM-DD", true).isValid() && today <= date;
}

export function valTime(time) {
  return moment(time, "HH:mm", true).isValid();
}

export function valDescr(description) {
  return 10 < description.trim().length && description.trim().length < 150;
}

export function valTitle(title, categories) {
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

export function valPrice(price) {
  return price > 0;
}

export function valIng(ingredients) {
  return ingredients.length > 0;
}
export function valImage(image, imageURL) {
  return imageURL.trim().length > 12 || typeof image === "object";
}

export function isCategoryValid(category, categories) {
  return valTitle(category.title, categories) && valDescr(category.description);
}

export function validCategory(category, categories) {
  const result = {
    title: valTitle(category.title, categories),
    description: valDescr(category.description),
  };
  return result;
}

export function validElement(element, categories) {
  const result = {
    title: valTitle(element.title, categories),
    description: valDescr(element.description),
    ingredients: valIng(element.ingredients),
    price: valPrice(element.price),
    category:
      valTitle(element.title, categories) && valDescr(element.description),

    dish:
      valTitle(element.title, categories) &&
      valDescr(element.description) &&
      valIng(element.ingredients) &&
      valPrice(element.price),
  };

  return result;
}
