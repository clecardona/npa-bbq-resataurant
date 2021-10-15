import uploadImage from "./storage";
import { createDoc, modifyDoc, delDoc } from "./fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";

// The database to perform operations
const database = getFirestore(firebaseInstance);

//CREATE CATEGORY
export async function createCategory(someCategory, someImage) {
  let newImageURL = "";
  if (typeof someImage === "object") {
    newImageURL = await uploadImage(firebaseInstance, someImage);
  } else {
    newImageURL = someImage;
  }
  const newCategory = { ...someCategory, imageURL: newImageURL };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to categories");
}

//CREATE DISH
export async function createDish(someDish, someImage) {
  let newImageURL = "";
  if (typeof someImage === "object") {
    newImageURL = await uploadImage(firebaseInstance, someImage);
  } else {
    newImageURL = someImage;
  }
  const newDish = { ...someDish, imageURL: newImageURL };
  createDoc(database, "dishes", newDish);
  alert(newDish.title + " added to category # " + newDish.categoryID);
}

//UPDATE CATEGORY
export async function updateCat(newData, newImage, category) {
  let updatedCategory = { ...category };

  if (newData.title !== "") {
    updatedCategory.title = newData.title;
  }
  if (newData.description !== "") {
    updatedCategory.description = newData.description;
  }
  if (newImage !== "") {
    if (typeof newImage === "object") {
      const newImageURL = await uploadImage(firebaseInstance, newImage);
      updatedCategory.imageURL = newImageURL;
    } else {
      updatedCategory.imageURL = newImage;
    }
  }
  await modifyDoc(database, "categories", category.id, updatedCategory);
  alert(updatedCategory.title + " successfully updated ");
}

//UPDATE DISH
export async function updateDish(newData, newImage, dish) {
  let updatedDish = { ...dish };

  if (newData.title !== "") {
    updatedDish.title = newData.title;
  }
  if (newData.description !== "") {
    updatedDish.description = newData.description;
  }
  if (newData.ingredients !== []) {
    updatedDish.ingredients = newData.ingredients;
  }
  if (!isNaN(newData.price)) {
    updatedDish.price = newData.price;
  }
  if (newImage !== "") {
    if (typeof newImage === "object") {
      const newImageURL = await uploadImage(firebaseInstance, newImage);
      updatedDish.imageURL = newImageURL;
    } else {
      updatedDish.imageURL = newImage;
    }
  }
  await modifyDoc(database, "dishes", dish.id, updatedDish);
  alert(updatedDish.title + " successfully updated ");
}

// Delete element by id
export async function deleteElement(path, id) {
  delDoc(database, path, id);
}
