/* script.js */
// JS za mobilni izbornik
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Zatvori izbornik kad se klikne na link
mobileMenu.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});