import uploadImage from "./storage";
import { createDoc, modifyDoc, delDoc } from "./fireStore";
import firebaseInstance from "../scripts/firebase";
import { getFirestore } from "firebase/firestore/lite";

// The database to perform operations
const database = getFirestore(firebaseInstance);

/*--------------CREATE -------------*/
//CREATE CATEGORY
// Create a category using upload image from client computer
export async function createCategory(someCategory, someImage) {
  let newImageURL = "";
  if (typeof someImage === "object") {
    newImageURL = await uploadImage(firebaseInstance, someImage);
  } else {
    newImageURL = someImage;
  }
  const newCategory = { ...someCategory, imageURL: newImageURL };
  createDoc(database, "categories", newCategory);
}

// Create a category using image URL
/* export async function createCategoryURL(someCategory, someImageURL) {
  const newCategory = { ...someCategory, imageURL: someImageURL };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to category ");
} */

//CREATE DISH
//Create a dish
export async function createDish(someDish, someImage) {
  let newImageURL = "";
  if (typeof someImage === "object") {
    newImageURL = await uploadImage(firebaseInstance, someImage);
  } else {
    newImageURL = someImage;
  }
  const newDish = { ...someDish, imageURL: newImageURL };
  createDoc(database, "dishes", newDish);
}

//Create a dish using URL link
/* export async function createDishURL(someDish, someImageURL) {
  const newDish = { ...someDish, imageURL: someImageURL };
  createDoc(database, "dishes", newDish);
} */

/*-------------- READ -------------*/

/*-------------- UPDATE -------------*/
//UPDATE CATEGORY
//Update category
export async function updateCategory(newData, newImage, category) {
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
  console.log(updatedCategory);
  await modifyDoc(database, "categories", category.id, updatedCategory);
  alert(updatedCategory.title + " successfully updated ");
}

//UPDATE DISH
//Update dish
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
  console.log(updatedDish);
  await modifyDoc(database, "dishes", dish.id, updatedDish);
  alert(updatedDish.title + " successfully updated ");
}

/*-------------- DELETE -------------*/
// Delete element by id
export async function deleteElement(path, id) {
  delDoc(database, path, id);
  console.log(path, " deleted", id);
}
