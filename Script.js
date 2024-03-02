document.querySelector(".close").addEventListener("click" , function(){
  document.querySelector(".popup").style.display = "none";
});

window.addEventListener("load" , function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      2000
  )
});

document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  // Add additional code here to handle form submission if needed
});



'use strict';








/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);





/*----------- for google form -------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbxDLt_VN3Bo-1ssfsfTSiLww0yR-U3zzDlN-ZSvovFSvvvpZMmGtrpzULZx-122CoEe0Q/exec'
  
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {

        msg.innerHTML = "Message sent successfully..!!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })


  
/*----------- for google form 2 -------*/

const ScriptURL = 'https://script.google.com/macros/s/AKfycbzfCUysKiclyLPbcr_u4Dcdp4dJmOjsbEGUPAYudbkjOXUMphbav71WgdlROnLNLXuf/exec'
  
const Form = document.forms['submit-to-google-sheet1']

const Msg = document.getElementById("msg")

  Form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(ScriptURL, { method: 'POST', body: new FormData(Form)})
      .then(response => {

        Msg.innerHTML = "Message sent successfully..!!"
        setTimeout(function(){
            Msg.innerHTML = ""
        },5000)
        Form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })