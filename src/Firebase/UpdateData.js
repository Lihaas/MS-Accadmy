import firebase from "./firebase";
import { DB } from "./firebase";

export const UpdateData = (onDataFetched) => {
  DB.collection("Updates")
    .doc("updates")
    .onSnapshot((doc) => {
      onDataFetched(doc.data()["Home-Updates"])
    });
};
