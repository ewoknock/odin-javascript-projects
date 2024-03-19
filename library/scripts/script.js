const dialog = document.querySelector("dialog");
const showButton = document.getElementById("show-dialog-btn");
const closeButton = document.getElementById("close-dialog-btn");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});