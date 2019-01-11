const hamburger = document.querySelector('.main-navbar__hamburger');
const navItems = document.querySelectorAll('.nav__item');

// Main navigation --> adding classes on mobile
hamburger.addEventListener('click', function () {
    document.querySelector('.main-navbar__nav').classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('active');
    document.querySelectorAll('.hamburger__item').forEach(function (item) {
        item.classList.toggle('active');
    });
});

// Main navigation-- > removing classes from link 's on mobile
navItems.forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelectorAll('.hamburger__item').forEach(function (item) {
            item.classList.remove('active');
        });
        document.querySelector('.main-navbar__nav').classList.remove('active');
        document.querySelector('.nav__list').classList.remove('active');
    });
});

//Up-btn button 
function showUpButton() {

    const scrollValue = window.scrollY;
    const upBtn = document.querySelector('.up-btn');

    if (scrollValue > 0) {
        upBtn.classList.add('active')
    } else {
        upBtn.classList.remove('active');
    }
}
window.addEventListener('scroll', showUpButton);

//Change navbar height 
window.addEventListener('scroll', function () {

    const scrollValue = window.scrollY;

    document.querySelector('.main-navbar').classList.add('active');

    if (scrollValue == 0) {
        document.querySelector('.main-navbar').classList.remove('active');
    }
})