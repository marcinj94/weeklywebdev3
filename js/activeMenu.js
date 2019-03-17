// Show active section on menu
function activeMenuSection() {

    // Get value of CSS variable --main__navbar_height (with px)
    const main__navbar_heightPx = getComputedStyle(document.documentElement).getPropertyValue('--main_navbar-height');

    //Change string main__navbar_height from value with px to value without px 
    const main__navbar_height = parseInt(main__navbar_heightPx, 10);

    //Scroll Value 
    const scrollValue = window.scrollY;
    //note --> add to scrollValue height of main_navbar-height (Windows > 1024px)
    const scrollValueWithNavbar = scrollValue + main__navbar_height;


    // Get nav__link from Desktop menu
    const navLinks = [...document.querySelectorAll('.nav__link')];

    // Section from Top of the screen (in px)
    const sectionsFromTop = [
        document.querySelector('.header').offsetTop,
        document.querySelector('.services').offsetTop,
        document.querySelector('.blog').offsetTop,
        document.querySelector('.project').offsetTop,
        document.querySelector('.contact').offsetTop,
        document.querySelector('.companies').offsetTop
    ];


    navLinks.forEach((navLink, i) => {
        if (scrollValueWithNavbar > sectionsFromTop[i] && scrollValueWithNavbar < sectionsFromTop[i + 1]) {
            navLinks[i].classList.add('active');
        } else {
            navLinks[i].classList.remove('active');
        }
    })

}

window.addEventListener('scroll', activeMenuSection);