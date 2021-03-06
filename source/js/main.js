"use strict";
/* ============== */
/* mobile navigation */
/* ============== */
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
/* ============== */
/* Модальное окно */
/* ============== */
var overlay = document.querySelector(".modal-overlay");
var openModals = document.querySelectorAll(".open-modal");
var popup = document.querySelector(".modal");
var buttonModal = document.querySelector(".button--modal-form");

if (openModals) {
  Array.from(openModals).forEach(function (openModal) {
    openModal.addEventListener("click", function (evt) {
      evt.preventDefault();
      overlay.style.display = "block";
      popup.classList.toggle("modal--show");
      buttonModal.focus();
    });
  });
}

/* Закрытие модального окна по клику на overlay */
if (overlay) {
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    popup.classList.toggle("modal--show");
  });
}

/* Закрытие модального окна по нажатию на Esc */
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      overlay.style.display = "";
    }
  }
});
