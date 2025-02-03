const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuContact = document.querySelector('#menu-contact');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuContact.addEventListener('click', () => {
    if (window.innerWidth < 800) {
        close();
    }
});

function show() {
    mainMenu.style.display = 'flex';
}

function close() {
    mainMenu.style.display = 'none';
}
