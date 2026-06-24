// Toggle mobile menu (Attila-style)
export default function menuOpen() {
    const html = document.documentElement;
    const navMenu = document.querySelector('.nav-menu');
    const navClose = document.querySelector('.nav-close');

    function toggleMenu() {
        html.classList.toggle('menu-active');
    }

    if (navMenu) navMenu.addEventListener('click', toggleMenu);
    if (navClose) navClose.addEventListener('click', toggleMenu);

    window.addEventListener('resize', () => {
        html.classList.remove('menu-active');
    });
}
