// Reading progress bar for post pages
export default function readingProgress() {
    const post = document.querySelector('.gh-content');
    const progressBar = document.querySelector('.progress-bar');

    if (!post || !progressBar) return;

    function update() {
        const postTop = post.getBoundingClientRect().top + window.scrollY;
        const postBottom = postTop + post.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        const progress = Math.min(
            100 - (((postBottom - (scrollTop + viewportHeight) + viewportHeight / 3) /
                (postBottom - viewportHeight + viewportHeight / 3)) * 100),
            100
        );

        progressBar.style.width = progress + '%';
    }

    let ticking = false;
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
