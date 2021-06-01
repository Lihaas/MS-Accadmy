import firebase from "./firebase";

export const isUserLoggedIn = (onDataFetched) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        onDataFetched(true)
    }
  });
};

export const logout = (onDataFetched) => {
  firebase.auth().signOut().then(() => {
    onDataFetched(false)
    console.log("User logged out successfully")
  }).catch((error) => {
    console.log(error)
  });
}

