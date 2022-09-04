const navButton = document.querySelector('.mobile-nav-button');
const navMobileActive = document.querySelector('.mobile-nav');
const body = document.querySelector('body');

navButton.addEventListener('click', function() {
    navMobileActive.classList.toggle('mobile-nav-active')
    body.classList.toggle('noscroll');
});
