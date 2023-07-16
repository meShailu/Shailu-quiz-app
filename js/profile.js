const darkModeToggle = document.getElementById("darkModeToggle");
const profile = document.getElementById("profile");

darkModeToggle.addEventListener("click", function () {
  profile.classList.toggle("dark-mode");
});
