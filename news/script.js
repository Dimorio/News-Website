const bars = document.querySelector(".fa-bar");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-time");
bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
