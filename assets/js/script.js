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
    let aboutUs = document.getElementById("aboutUs");
    let services = document.getElementById("services");
    let features = document.getElementById("features");
    let price = document.getElementById("price");
    let reviews = document.getElementById("reviews");
    let blogs = document.getElementById("blogs");
    let contacts = document.getElementById("contacts");

    let home = document.getElementById("home");
    let about = document.getElementById("about");
    let service = document.getElementById("service");
    let feature = document.getElementById("feature");
    let pricing = document.getElementById("pricing");
    let review = document.getElementById("review");
    let blog = document.getElementById("blog");
    let contact = document.getElementById("contact");
    // console.log(contact.offsetTop);
    
    if (winScroll >= home.offsetTop && winScroll < about.offsetTop) {
      start.classList.add("activate");
      aboutUs.classList.remove("activate");
    } else if (winScroll >= about.offsetTop && winScroll < service.offsetTop){
      start.classList.remove("activate");
      aboutUs.classList.add("activate");
      services.classList.remove("activate");
    } else if (winScroll >= service.offsetTop && winScroll < feature.offsetTop){
      aboutUs.classList.remove("activate");
      services.classList.add("activate");
      features.classList.remove("activate");
    } else if (winScroll >= service.offsetTop && winScroll < pricing.offsetTop){
      services.classList.remove("activate");
      features.classList.add("activate");
      price.classList.remove("activate");
    } else if (winScroll >= pricing.offsetTop && winScroll < review.offsetTop){
      features.classList.remove("activate");
      price.classList.add("activate");
      reviews.classList.remove("activate");
    } else if (winScroll >= review.offsetTop && winScroll < blog.offsetTop){
      price.classList.remove("activate");
      reviews.classList.add("activate");
      blogs.classList.remove("activate");
    } else if (winScroll >= blog.offsetTop && winScroll < contact.offsetTop){
      reviews.classList.remove("activate");
      blogs.classList.add("activate");
      contacts.classList.remove("activate");
    } else {
      blogs.classList.remove("activate");
      contacts.classList.add("activate");
    }
  }
}
new ChangeRowSize();