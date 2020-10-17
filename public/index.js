const toggle = document.querySelector("#toggle");
const mNav = document.querySelector("#mobile-nav");

toggle.addEventListener("click", () => {
  if (mNav.classList.contains("hidden")) {
    mNav.classList.remove("hidden");
  } else {
    mNav.classList.add("hidden");
  }
});
