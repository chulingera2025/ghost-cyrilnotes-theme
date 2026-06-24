// Theme toggle: cycles between Dark → Light → System
export default function themeToggle() {
    const html = document.documentElement;
    const toggle = document.querySelector('.js-theme');
    const toggleText = toggle ? toggle.querySelector('.theme-text') : null;

    if (!toggle) return;

    function system() {
        html.classList.remove('theme-dark', 'theme-light');
        localStorage.setItem('theme', 'system');
        if (toggleText) toggleText.textContent = toggle.getAttribute('data-system');
    }

    function dark() {
        html.classList.remove('theme-light');
        html.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
        if (toggleText) toggleText.textContent = toggle.getAttribute('data-dark');
    }

    function light() {
        html.classList.remove('theme-dark');
        html.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
        if (toggleText) toggleText.textContent = toggle.getAttribute('data-light');
    }

    // Init: sync toggle text with current state
    if (html.classList.contains('theme-dark')) {
        if (toggleText) toggleText.textContent = toggle.getAttribute('data-dark');
    } else if (html.classList.contains('theme-light')) {
        if (toggleText) toggleText.textContent = toggle.getAttribute('data-light');
    }

    toggle.addEventListener('click', function (e) {
        e.preventDefault();

        if (html.classList.contains('theme-dark')) {
            light();
        } else if (html.classList.contains('theme-light')) {
            system();
        } else {
            dark();
        }
    });
}
