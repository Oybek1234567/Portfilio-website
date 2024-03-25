const btn = document.querySelector(".btn");
window.addEventListener("scroll", () => {
    btn.classList.toggle("active", window.scrollY > 500);
});
btn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
