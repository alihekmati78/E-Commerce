const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const nav = document.querySelector(".navbar");

function toggleMenu () {
    menu.addEventListener("click", ()=> {
        nav.classList.toggle("active")
    });

    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}

toggleMenu();
