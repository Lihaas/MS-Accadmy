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

export const profileDropdownHandler = () => {
  var profileDropdown = document.querySelector("#profile-dropdown");
  var notesDropdown = document.querySelector("#notes-dropdown");
  var coursesDropdown = document.querySelector("#courses-dropdown");
  if (
    profileDropdown.style.display === "none" ||
    profileDropdown.style.display === ""
  ) {
    profileDropdown.style.display = "block";
    notesDropdown.style.display = "none";
    coursesDropdown.style.display = "none";
  } else {
    profileDropdown.style.display = "none";
  }
};

export const coursesDropdownHandler = () => {
  var coursesDropdown = document.querySelector("#courses-dropdown");
  var notesDropdown = document.querySelector("#notes-dropdown");
  var profileDropdown = document.querySelector("#profile-dropdown");
  if (
    coursesDropdown.style.display === "none" ||
    coursesDropdown.style.display === ""
  ) {
    coursesDropdown.style.display = "block";
    notesDropdown.style.display = "none";
    if(profileDropdown!==null)
    {
      profileDropdown.style.display = "none";
    }
  } else {
    coursesDropdown.style.display = "none";
  }
}

export const notesDropdownHandler = () => {
  var notesDropdown = document.querySelector("#notes-dropdown");
  var coursesDropdown = document.querySelector("#courses-dropdown");
  var profileDropdown = document.querySelector("#profile-dropdown");
  if (
    notesDropdown.style.display === "none" ||
    notesDropdown.style.display === ""
  ) {
    notesDropdown.style.display = "block";
    coursesDropdown.style.display = "none";
    if(profileDropdown!==null)
    {
      profileDropdown.style.display = "none";
    }
  } else {
    notesDropdown.style.display = "none";
  }
}

export const courseHideShow = () =>{
  var courseDropDownMenu = document.querySelector("#course-drop-down");
  if (
    courseDropDownMenu.style.display === "none" ||
    courseDropDownMenu.style.display === ""
  ) {
    courseDropDownMenu.style.display = "block";
  } else {
    courseDropDownMenu.style.display = "none";
  }
}
export const noteHideShow = () =>{
  var notesDropDownMenu = document.querySelector("#notes-drop-down");
  if (
    notesDropDownMenu.style.display === "none" ||
    notesDropDownMenu.style.display === ""
  ) {
    notesDropDownMenu.style.display = "block";
  } else {
    notesDropDownMenu.style.display = "none";
  }
}

export const desktopDropdownHandler = ()=>{
  var notesDropdown = document.querySelector("#notes-dropdown");
  var coursesDropdown = document.querySelector("#courses-dropdown");
  var profileDropdown = document.querySelector("#profile-dropdown");
  if(
  coursesDropdown.style.display === "block" ||
  notesDropdown.style.display === "block"
  ){
    coursesDropdown.style.display = "none";
    notesDropdown.style.display = "none";
  }
  if(profileDropdown!==null &&  
    profileDropdown.style.display === "block")
    {
      profileDropdown.style.display = "none";
    }
  // console.log(document.getElementById("profile-dropdown").style)
}