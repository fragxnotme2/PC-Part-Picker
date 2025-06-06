// Products Dropdown Menu
document.addEventListener('DOMContentLoaded', () => {
    const productsMenu = document.querySelector('.products-menu');
    const productsLink = productsMenu.querySelector('a');

    // Toggle dropdown on click
    productsLink.addEventListener('click', (e) => {
        e.preventDefault();
        productsMenu.classList.toggle('show-dropdown');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!productsMenu.contains(e.target)) {
            productsMenu.classList.remove('show-dropdown');
        }
    });
}); 