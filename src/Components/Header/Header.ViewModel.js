export const changeBackground = (headerRef) => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 84) {
      if (headerRef.current.style.background === "") {
        headerRef.current.style.background = "white";
        headerRef.current.style.paddingTop = "0.4rem";
        headerRef.current.style.paddingBottom = "0.4rem";
        headerRef.current.style.boxShadow =
          "0rem 0.4rem 0.4rem rgba(0,0,0,0.3)";
      }
    }
    if (window.pageYOffset < 84) {
      if (headerRef.current.style.background === "white") {
        headerRef.current.style.background = "";
        headerRef.current.style.paddingTop = "1rem";
        headerRef.current.style.paddingBottom = "1rem";
        headerRef.current.style.boxShadow = "0rem 0rem 0rem transparent";
      }
    }
  });
};

export const navDrawerHandler = (isDrawerOpen, openDrawer, drawerRef) => {
  if (isDrawerOpen) {
    openDrawer(false);
    drawerRef.current.style.height = "0";
  } else {
    openDrawer(true);
    drawerRef.current.style.height = "25rem";
  }
};

export const courseHideShow = () =>{
  var courseDropDownMenu = document.querySelector("#course-drop-down");
  var notesDropDownMenu = document.querySelector("#notes-drop-down");
  if (
    courseDropDownMenu.style.display === "none" ||
    courseDropDownMenu.style.display === ""
  ) {
    courseDropDownMenu.style.display = "block";
    notesDropDownMenu.style.display = "none";
  } else {
    courseDropDownMenu.style.display = "none";
  }
}
export const noteHideShow = () =>{
  var notesDropDownMenu = document.querySelector("#notes-drop-down");
  var courseDropDownMenu = document.querySelector("#course-drop-down");
  if (
    notesDropDownMenu.style.display === "none" ||
    notesDropDownMenu.style.display === ""
  ) {
    notesDropDownMenu.style.display = "block";
    courseDropDownMenu.style.display = "none";
  } else {
    notesDropDownMenu.style.display = "none";
  }
}