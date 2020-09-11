var form = document.querySelector(".form");
var failure = document.querySelector(".modal--failure");
var success = document.querySelector(".modal--success");
var inputs = form.querySelectorAll("input");
var submit = form.querySelector(".form__link");
var failureClose = failure.querySelector(".modal__failure-btn");
var successClose = success.querySelector(".modal__success-btn");

submit.addEventListener("click", function (evt) {

  for (var i = 0; i < inputs.length; i++) {

    var input = inputs[i];

    if (input.checkValidity() === false) {
      evt.preventDefault();
      failure.classList.add("modal__show");
      input.classList.add("form__input-invalid");
      success.classList.remove("modal__show");
    }
    else {
      input.classList.remove("form__input-invalid");
    }

  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  success.classList.add("modal__show");
  failure.classList.remove("modal__show");

});

failureClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  failure.classList.remove("modal__show");
});

successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  success.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    failure.classList.remove("modal__show");
    success.classList.remove("modal__show");
  }
});
