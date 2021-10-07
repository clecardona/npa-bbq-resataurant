export function getCurrentCategory(array, categoryOfFood) {
  return array.filter((item) => {
    return item.name === categoryOfFood;
  })[0];
}

export function getRelatedFood(array, categoryOfFood) {
  return array.filter((item) => {
    return item.category === categoryOfFood;
  });
}

export function getRelatedItem(array, id) {
  return array.filter((item) => {
    return item.id === id;
  })[0];
}
