import firebase from "./firebase";
import { DB } from "./firebase";

export const Paper1NotesData = (onDataFetched) => {
  DB.collection("Notes-Paper1")
    .doc("Chapter1")
    .onSnapshot((doc) => { 
      onDataFetched(doc.data())
    });
};

export const Paper2NotesData = (onDataFetched) => {
  DB.collection("Notes-Paper2")
    .doc("Chapter1")
    .onSnapshot((doc) => {
      console.log(doc.data());
      onDataFetched(doc.data())
    });
};
