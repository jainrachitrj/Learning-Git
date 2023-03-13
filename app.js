document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.querySelector(".theme-control-btn");
    themeBtn.addEventListener("click", () => {
        if (document.body.className == "light-mode") {
            document.body.className = "dark-mode";
            themeBtn.innerHTML = "Light Mode";
        }
        else {
            document.body.className = "light-mode";
            themeBtn.innerHTML = "Dark Mode";
        }
    })
})