const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.querySelector('.navegacao');
    nav.classList.toggle("active")
}
btnMobile.addEventListener('click', toggleMenu);