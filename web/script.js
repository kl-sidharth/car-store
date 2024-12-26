// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle the "show" class on the nav-links element
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
