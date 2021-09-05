import firebase from "./firebase";
import { DB } from "./firebase";

export const bookData = (onDataFetched) => {
  DB.collection("Books")
    .doc("list")
    .onSnapshot((doc) => {
      onDataFetched(doc.data()["bookList"])
    });
};


// export const addBook = () =>{
//   DB.collection("Books").docRef("list").add({
//     img: "https://firebasestorage.googleapis.com/v0/b/ms-academy-a37fa.appspot.com/o/attachment_80004080-e1488217702832.jpg?alt=media&token=cf7b895d-f1dd-4607-92e2-f17113e1674c",
//     name: "New pic"
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });
// }
export const addBook = () =>{
  DB.collection("Books").doc("list").update({
      bookList: firebase.firestore.FieldValue.arrayUnion({
        img: "https122",
        name: "new22"
      }),
  }).then(function() {
    console.log("Frank created");
  });
}