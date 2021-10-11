export function getCurrentCategory(array, id) {
  return array.filter((item) => {
    return item.id === id;
  })[0];
}

export function getRelatedFood(array, categoryID) {
  return array.filter((item) => {
    return item.categoryID === categoryID;
  });
}

export function getRelatedItem(array, id) {
  return array.filter((item) => {
    return item.id === id;
  })[0];
}
