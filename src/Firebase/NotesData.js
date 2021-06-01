import firebase from "./firebase";
import { DB } from "./firebase";

export const Paper1NotesData = (onDataFetched) => {
  DB.collection("Notes-Paper1")
    .doc("Chapter1")
    .onSnapshot((doc) => {
      console.log("Current data: ", doc.data());
      console.log(Object.keys(doc.data()))    
      onDataFetched(doc.data())
    });
};

export const Paper2NotesData = (onDataFetched) => {
  DB.collection("Notes-Paper2")
    .doc("Paper2")
    .onSnapshot((doc) => {
      console.log("Current data: ", doc.data());
    });
};
