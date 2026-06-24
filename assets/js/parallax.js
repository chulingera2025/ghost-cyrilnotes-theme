// Parallax cover effect
export default function parallax() {
    const cover = document.querySelector('.cover');
    if (!cover) return;

    let ticking = false;

    function update() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const offset = scrollY > 0 ? Math.floor(scrollY * 0.25) : 0;
        cover.style.transform = `translate3d(0, ${offset}px, 0)`;

        if (scrollY < cover.offsetHeight) {
            document.documentElement.classList.add('cover-active');
        } else {
            document.documentElement.classList.remove('cover-active');
        }
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                update();
                ticking = false;
            });
            ticking = true;
        }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
}
