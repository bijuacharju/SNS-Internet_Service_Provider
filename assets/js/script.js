class ChangeRowSize {
  constructor() {
    this.class1 = "col-lg-3";
    this.class2 = "col-lg-6";
    this.class3 = "col-md-3";
    this.class4 = "col-md-6";
    window.onload = this.toggleClass();
    window.addEventListener("resize", () => {this.toggleClass();});
    window.onload = this.activeNavbar();
    window.addEventListener("scroll", () => {this.activeNavbar();});
  }
  toggleClass = () =>{
    if (window.innerWidth >= 990) {
      document.getElementById("packageOne").classList.replace(this.class2, this.class1);
      document.getElementById("packageOne").classList.replace(this.class4, this.class3);
      document.getElementById("packageTwo").classList.replace(this.class2, this.class1);
      document.getElementById("packageTwo").classList.replace(this.class4, this.class3);
      document.getElementById("packageThree").classList.replace(this.class2, this.class1);
      document.getElementById("packageThree").classList.replace(this.class4, this.class3);
      document.getElementById("packageFour").classList.replace(this.class2, this.class1);
      document.getElementById("packageFour").classList.replace(this.class4, this.class3);
    } else if (window.innerWidth >= 768 || window.innerWidth <= 990) {
      document.getElementById("packageOne").classList.replace(this.class1, this.class2);
      document.getElementById("packageOne").classList.replace(this.class3, this.class4);
      document.getElementById("packageTwo").classList.replace(this.class1, this.class2);
      document.getElementById("packageTwo").classList.replace(this.class3, this.class4);
      document.getElementById("packageThree").classList.replace(this.class1, this.class2);
      document.getElementById("packageThree").classList.replace(this.class3, this.class4);
      document.getElementById("packageFour").classList.replace(this.class1, this.class2);
      document.getElementById("packageFour").classList.replace(this.class3, this.class4);
    }
  }
  activeNavbar = () => {
    let winScroll = document.documentElement.scrollTop;
    let start = document.getElementById("start");
    let about = document.getElementById("about");
    let service = document.getElementById("service");
    let feature = document.getElementById("feature");
    let price = document.getElementById("price");
    let review = document.getElementById("review");
    let blog = document.getElementById("blog");
    let contact = document.getElementById("contact");

    
    // let scrolledHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (winScroll >= 0 && winScroll < 400) {
      start.classList.add("activate");
      about.classList.remove("activate");
    } else if (winScroll >= 400 && winScroll < 1000){
      start.classList.remove("activate");
      about.classList.add("activate");
      service.classList.remove("activate");
    } else if (winScroll >= 1000 && winScroll < 1500){
      about.classList.remove("activate");
      service.classList.add("activate");
      feature.classList.remove("activate");
    } else if (winScroll >= 1500 && winScroll < 3300){
      service.classList.remove("activate");
      feature.classList.add("activate");
      price.classList.remove("activate");
    } else if (winScroll >= 3300 && winScroll < 4110){
      feature.classList.remove("activate");
      price.classList.add("activate");
      review.classList.remove("activate");
    } else if (winScroll >= 4110 && winScroll < 5300){
      price.classList.remove("activate");
      review.classList.add("activate");
      blog.classList.remove("activate");
    } else if (winScroll >= 5300 && winScroll < 6115){
      review.classList.remove("activate");
      blog.classList.add("activate");
      contact.classList.remove("activate");
    } else {
      blog.classList.remove("activate");
      contact.classList.add("activate");
    }
  }
}
new ChangeRowSize();