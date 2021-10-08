import uploadImage from "./storage";
import { createDoc } from "./fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";

const database = getFirestore(firebaseInstance);

export function getCurrentCategory(array, categoryOfFood) {
  return array.filter((item) => {
    return item.title === categoryOfFood;
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

export async function addCategory(
  event,
  someTitle,
  someDescription,
  someImage
) {
  event.preventDefault();
  const newImageURL = await uploadImage(firebaseInstance, someImage);

  const newCategory = {
    id: Date.now(),
    title: someTitle,
    description: someDescription,
    imageURL: newImageURL,
  };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to category ");
}

export async function addDish(
  event,
  someTitle,
  someDescription,
  someImage,
  someCategory,
  someIngredients,
  somePrice
) {
  event.preventDefault();
  const newImageURL = await uploadImage(firebaseInstance, someImage);

  const newDish = {
    id: Date.now(),
    title: someTitle,
    description: someDescription,
    ingredients: someIngredients,
    imageURL: newImageURL,
    price: somePrice,
    category: someCategory,
  };

  createDoc(database, "dishes", newDish);
  alert(newDish.title + " successfully added to category " + newDish.category);
}
