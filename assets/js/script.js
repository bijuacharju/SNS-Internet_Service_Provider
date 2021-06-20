window.onload = toggleClass();
window.addEventListener("resize", toggleClass);

function toggleClass() {
  if (window.innerWidth >= 990) {
    document
      .getElementById("packageOne")
      .classList.replace("col-lg-6", "col-lg-3");
    document
      .getElementById("packageOne")
      .classList.replace("col-md-6", "col-md-3");

    document
      .getElementById("packageTwo")
      .classList.replace("col-lg-6", "col-lg-3");
    document
      .getElementById("packageTwo")
      .classList.replace("col-md-6", "col-md-3");

    document
      .getElementById("packageThree")
      .classList.replace("col-lg-6", "col-lg-3");
    document
      .getElementById("packageThree")
      .classList.replace("col-md-3", "col-md-3");

    document
      .getElementById("packageFour")
      .classList.replace("col-lg-6", "col-lg-3");
    document
      .getElementById("packageFour")
      .classList.replace("col-md-6", "col-md-3");
  } else if (window.innerWidth >= 576 || window.innerWidth <= 990) {
    document
      .getElementById("packageOne")
      .classList.replace("col-lg-3", "col-lg-6");
    document
      .getElementById("packageOne")
      .classList.replace("col-md-3", "col-md-6");

    document
      .getElementById("packageTwo")
      .classList.replace("col-lg-3", "col-lg-6");
    document
      .getElementById("packageTwo")
      .classList.replace("col-md-3", "col-md-6");

    document
      .getElementById("packageThree")
      .classList.replace("col-lg-3", "col-lg-6");
    document
      .getElementById("packageThree")
      .classList.replace("col-md-3", "col-md-6");

    document
      .getElementById("packageFour")
      .classList.replace("col-lg-3", "col-lg-6");
    document
      .getElementById("packageFour")
      .classList.replace("col-md-3", "col-md-6");
  }
}
