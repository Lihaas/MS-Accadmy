import firebase from "./firebase";
import { DB } from "./firebase";

export const bookData = (onDataFetched) => {
  DB.collection("Books")
    .doc("list")
    .onSnapshot((doc) => {
      onDataFetched(doc.data()["bookList"])
    });
};