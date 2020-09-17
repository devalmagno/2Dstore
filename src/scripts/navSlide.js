export default function navSlide() {
    // let open = false;

    const nav = document.querySelector('.login');
    const menuClosed = document.querySelector('.menuClosed');
    const menuOpen = document.querySelector('.menuOpen');

    nav.classList.toggle('login-active');

    function openMenu() {
        menuClosed.classList.toggle('isNotVisible');
        menuOpen.classList.toggle('isNotVisible');
    }

    openMenu()
}