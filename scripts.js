document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Scroll spy for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['home', 'about', 'services', 'rates', 'pricing'].map(id => document.getElementById(id));

    function activateNav() {
        let index = sections.length - 1;
        for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top <= 80) index = i;
        }
        navLinks.forEach((link, i) => {
            if (i === index) link.classList.add('active');
            else link.classList.remove('active');
        });
    }

    window.addEventListener('scroll', activateNav);
    activateNav();

    // Ensure home section is visible on load
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('show');
    }

    // Book Now popup logic
    const bookNowBtn = document.getElementById('bookNowBtn');
    const popup = document.getElementById('popupMessage');
    const continueBtn = document.getElementById('continueBtn');

    if (bookNowBtn && popup && continueBtn) {
        bookNowBtn.addEventListener('click', () => {
            popup.classList.add('active');
        });
        continueBtn.addEventListener('click', () => {
            popup.classList.remove('active');
        });
        // Optional: close popup on outside click
        popup.addEventListener('click', (e) => {
            if (e.target === popup) popup.classList.remove('active');
        });
    }
});
