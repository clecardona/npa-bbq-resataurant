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
  const newImageURL = await uploadImage(firebaseInstance, someImage);
  const newCategory = { ...someCategory, imageURL: newImageURL };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to category ");
}

// Create a category using image URL
export async function createCategoryURL(someCategory, someImageURL) {
  const newCategory = { ...someCategory, imageURL: someImageURL };
  createDoc(database, "categories", newCategory);
  alert(newCategory.title + " successfully added to category ");
}

//CREATE DISH
//Create a dish using upload image from client computer
export async function createDishBytes(someDish, someImage) {
  const newImageURL = await uploadImage(firebaseInstance, someImage);
  const newDish = { ...someDish, imageURL: newImageURL };
  createDoc(database, "dishes", newDish);
}

//Create a dish using URL link
export async function createDishURL(someDish, someImageURL) {
  const newDish = { ...someDish, imageURL: someImageURL };
  createDoc(database, "dishes", newDish);
}

/*-------------- READ -------------*/

/*-------------- UPDATE -------------*/
//UPDATE CATEGORY
//Update catgory using bytes
export async function updateCategory(newData, newImage, category) {
  let updatedCategory = { ...category };

  if (newData.title !== "") {
    updatedCategory.title = newData.title;
  }
  if (newData.description !== "") {
    updatedCategory.description = newData.description;
  }
  if (newImage !== "") {
    const newImageURL = await uploadImage(firebaseInstance, newImage);
    updatedCategory.imageURL = newImageURL;
  }
  console.log(updatedCategory);
  await modifyDoc(database, "categories", category.id, updatedCategory);
  alert(updatedCategory.title + " successfully updated ");
}

//Update category using URL link
export async function updateCategoryURL(newData, newImageURL, category) {
  let updatedCategory = { ...category };

  if (newData.title !== "") {
    updatedCategory.title = newData.title;
  }
  if (newData.description !== "") {
    updatedCategory.description = newData.description;
  }
  if (newImageURL !== "") {
    updatedCategory.imageURL = newImageURL;
  }

  await modifyDoc(database, "categories", category.id, updatedCategory);
  alert(updatedCategory.title + " successfully updated ");
}

//UPDATE CATEGORY
//Update catgory using bytes
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
  if (newData.price !== "") {
    updatedDish.price = newData.price;
  }
  if (newImage !== "") {
    const newImageURL = await uploadImage(firebaseInstance, newImage);
    updatedDish.imageURL = newImageURL;
  }
  console.log(updatedDish);
  await modifyDoc(database, "dishes", dish.id, updatedDish);
  alert(updatedDish.title + " successfully updated ");
}

//Update catgory using link URL for the image
export async function updateDishURL(newData, newImageURL, dish) {
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
  if (newData.price !== "") {
    updatedDish.price = newData.price;
  }
  if (newImageURL !== "") {
    updatedDish.imageURL = newImageURL;
  }
  console.log(updatedDish);
  await modifyDoc(database, "dishes", dish.id, updatedDish);
  alert(updatedDish.title + " successfully updated ");
}

/*-------------- DELETE -------------*/
// Delete category by id
export async function deleteCategory(id) {
  const database = getFirestore(firebaseInstance);
  const path = "categories";
  delDoc(database, path, id);
  console.log("Document deleted ");
}
