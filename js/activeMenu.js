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
    const nav__link_home = document.querySelector('.nav__item:nth-child(1) .nav__link');
    const nav__link_about = document.querySelector('.nav__item:nth-child(2) .nav__link');
    const nav__link_blog = document.querySelector('.nav__item:nth-child(3) .nav__link');
    const nav__link_portfolio = document.querySelector('.nav__item:nth-child(4) .nav__link');
    const nav__link_contact = document.querySelector('.nav__item:nth-child(5) .nav__link');

    // Section from Top of the screen (in px)
    const homeSectionFromTop = document.querySelector('.header').offsetTop;
    const aboutSectionFromTop = document.querySelector('.services').offsetTop;
    const blogSectionFromTop = document.querySelector('.blog').offsetTop;
    const portfolioSectionFromTop = document.querySelector('.project').offsetTop;
    const contactSectionFromTop = document.querySelector('.contact').offsetTop;
    const companiesSectionFromTop = document.querySelector('.companies').offsetTop;

    // Height of portfolio section
    const portfolioSectionHeight = document.querySelector('.project').clientHeight;

    // End of portfolio section from top of the screen (in px)
    const portfolioSectionEndFromTop = portfolioSectionHeight + portfolioSectionFromTop;


    if (scrollValueWithNavbar > homeSectionFromTop && scrollValueWithNavbar < aboutSectionFromTop) {
        nav__link_home.classList.add('active');
    } else {
        nav__link_home.classList.remove('active');
    }

    if (scrollValueWithNavbar > aboutSectionFromTop && scrollValueWithNavbar < blogSectionFromTop) {
        nav__link_about.classList.add('active');
    } else {
        nav__link_about.classList.remove('active');
    }

    if (scrollValueWithNavbar > blogSectionFromTop && scrollValueWithNavbar < portfolioSectionFromTop) {
        nav__link_blog.classList.add('active');
    } else {
        nav__link_blog.classList.remove('active');
    }

    if (scrollValueWithNavbar > portfolioSectionFromTop && scrollValueWithNavbar < portfolioSectionEndFromTop) {
        nav__link_portfolio.classList.add('active');
    } else {
        nav__link_portfolio.classList.remove('active');
    }

    if (scrollValueWithNavbar > contactSectionFromTop && scrollValueWithNavbar < companiesSectionFromTop) {
        nav__link_contact.classList.add('active');
    } else {
        nav__link_contact.classList.remove('active');
    }
}

window.addEventListener('scroll', activeMenuSection);