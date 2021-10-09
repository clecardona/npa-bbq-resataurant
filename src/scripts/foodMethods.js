import uploadImage from "./storage";
import { createDoc, modifyDoc, delDoc } from "./fireStore";
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
    title: someTitle,
    description: someDescription,
    imageURL: newImageURL,
  };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to category ");
}

export async function updateCategory(
  event,
  newTitle,
  newDescription,
  newImage,
  category
) {
  event.preventDefault();
  let updatedCategory = { ...category };

  if (newTitle !== "") {
    updatedCategory.title = newTitle;
  }
  if (newDescription !== "") {
    updatedCategory.description = newDescription;
  }
  if (newImage !== "") {
    const newImageURL = await uploadImage(firebaseInstance, newImage);
    updatedCategory.imageURL = newImageURL;
  }

  await modifyDoc(database, "categories", category.id, updatedCategory);
  alert(updatedCategory.title + " successfully updated ");
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

// Delete category by id
export async function deleteCategory(id) {
  const database = getFirestore(firebaseInstance);
  const path = "categories";
  delDoc(database, path, id);
  console.log("Document deleted ");
}
