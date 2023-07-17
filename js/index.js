const bookmarkImage = document.getElementById("bookmark");
let isBookmarked = true;
bookmarkImage.addEventListener("click", function () {
  if (isBookmarked) {
    bookmarkImage.src = "./images/bookmark_section.png";
  } else {
    bookmarkImage.src = "./images/bookmark.png";
  }
  isBookmarked = !isBookmarked;
});

const toggleButton = document.getElementById("toggleButton");
const answer = document.getElementById("answer");

toggleButton.addEventListener("click", function () {
  if (answer.style.display === "none") {
    answer.style.display = "";
    toggleButton.textContent = "Hide Answer";
  } else {
    answer.style.display = "none";
    toggleButton.textContent = "Show Answer";
  }
});
