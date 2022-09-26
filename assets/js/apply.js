// applu buttons
const contentBtn = document.querySelector(".content");
const reviewsBtn = document.querySelector(".reviews");
const feedbackBtn = document.querySelector(".feedback");
const listApply = document.querySelector(".list__apply");
const applyReview = document.querySelector(".apply__review");
const applyFeedback = document.querySelector(".apply__feedback");

function showContents() {
  console.log("hi");
  listApply.style.display = "block";
  applyReview.style.display = "none";
  applyFeedback.style.display = "none";
  contentBtn.classList.add("btn__main");
  reviewsBtn.classList.remove("btn__main");
  feedbackBtn.classList.remove("btn__main");
}

function showReviews() {
  listApply.style.display = "none";
  applyReview.style.display = "block";
  applyFeedback.style.display = "none";
  contentBtn.classList.remove("btn__main");
  reviewsBtn.classList.add("btn__main");
  feedbackBtn.classList.remove("btn__main");
}

function applyFeedbacks() {
  listApply.style.display = "none";
  applyReview.style.display = "none";
  applyFeedback.style.display = "block";
  contentBtn.classList.remove("btn__main");
  reviewsBtn.classList.remove("btn__main");
  feedbackBtn.classList.add("btn__main");
}
