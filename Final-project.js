const booksBtn = document.querySelector("#booksBtn");
const ebooksBtn = document.querySelector("#ebooksBtn");
const magazineBtn = document.querySelector("#magazineBtn");
const stationaryBtn = document.querySelector("#stationaryBtn");
const bookList = document.querySelector("#bookList");
const ebookList = document.querySelector("#ebookList");
const magList = document.querySelector("#magazineList");
const statList = document.querySelector("#statList");
const subCat = document.querySelectorAll(".sub-cat");

booksBtn.addEventListener("click", function () {
  // e.preventDefault();
  // console.log("test");
  for (i = 0; i < subCat.length; i++) {
    subCat[i].style.display = "none";
  }
  bookList.style.display = "inline";
});
ebooksBtn.addEventListener("click", function () {
  for (i = 0; i < subCat.length; i++) {
    subCat[i].style.display = "none";
  }
  ebookList.style.display = "inline";
});
magazineBtn.addEventListener("click", function () {
  for (i = 0; i < subCat.length; i++) {
    subCat[i].style.display = "none";
  }
  magList.style.display = "inline";
});
stationaryBtn.addEventListener("click", function () {
  for (i = 0; i < subCat.length; i++) {
    subCat[i].style.display = "none";
  }
  statList.style.display = "inline ";
});

// SignIn Modal
const modalSignin = document.querySelector("#modalSignin");
const signInBtn = document.querySelector("#signInBtn");
const container = document.querySelector("#container");
closeBtn = document.querySelector("#closeBtn");
overLay = document.querySelector("#overlay");
signInBtn.addEventListener("click", function () {
  console.log("hello");
  modalSignin.style.visibility = "visible";
  // container.style.backgroundColor = " rgba(172, 169, 169, 0.5)";
  overLay.style.display = "block";
});
// " rgb(172, 169, 169, 0.5)";
closeBtn.addEventListener("click", function () {
  console.log("hi");
  modalSignin.style.visibility = "hidden";
  overLay.style.display = "none";
});
