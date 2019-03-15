var feedback = document.querySelector(".feedback-btn"),
  feedbackModal = document.querySelector(".modal-content-feedback"),
  username = feedbackModal.querySelector("[name=user-name]"),
  email = feedbackModal.querySelector("[name=user-mail]"),
  message = feedbackModal.querySelector("[name=feedback-text]"),
  form = feedbackModal.querySelector("form"),
  isStorageSupport = true,
  storage = "",
  mapBtn = document.querySelector(".contacts-map"),
  mapModal = document.querySelector(".index-map"),
  feedbackClose = document.querySelector(".feedback-close"),
  mapClose = document.querySelector(".map-close");

try {
  storage = localStorage.getItem("message");
}
catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {

  evt.preventDefault();
  feedbackModal.classList.add("modal-show");

  if (storage) {
    message.value = storage;
  }

  username.focus();

});


mapBtn.addEventListener("click", function (evt) {

  evt.preventDefault();
  mapModal.classList.add("modal-show");

});

feedbackClose.addEventListener("click", function (evt) {

  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");

});

mapClose.addEventListener("click", function (evt) {

  evt.preventDefault();
  mapModal.classList.remove("modal-show");

});

form.addEventListener("submit", function (evt) {


  console.log('user = '+username.value+'; email = '+email.value+'; msg = '+message.value);
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("message", message.value);
    }
  }

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackModal.classList.contains("modal-show")) {
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
      mapModal.classList.remove("modal-show");
    }
  }
});
