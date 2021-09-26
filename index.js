// Mobile nav JS
const openMobileNavEl = document.getElementById("open-mobile-nav");
const closeMobileNavEl = document.getElementById("mobile-close");
const sideNavEl = document.getElementById("side-nav");

openMobileNavEl.addEventListener("click", () => {
  sideNavEl.classList.add("show-mobile-nav");
});
closeMobileNavEl.addEventListener("click", () => {
  sideNavEl.classList.remove("show-mobile-nav");
});
window.addEventListener("resize", handleWindowResize);

function handleWindowResize() {
  let width = window.innerWidth;
  if (width > 990) {
    sideNavEl.classList.remove("show-mobile-nav");
  }
}
