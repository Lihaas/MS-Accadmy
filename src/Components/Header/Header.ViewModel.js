export const changeBackground = (headerRef) => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 84) {
      if (headerRef.current.style.background === "") {
        headerRef.current.style.background = "white";
        headerRef.current.style.paddingTop = "0.4rem";
        headerRef.current.style.paddingBottom = "0.4rem";
        headerRef.current.style.boxShadow = "0rem 0.4rem 0.4rem rgba(0,0,0,0.3)";
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
