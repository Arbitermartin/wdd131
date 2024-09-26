// Set current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-button');
    const nav = document.querySelector('nav ul');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});
