const navSlide = () => {
    const burger = document.querySelector('.brgr')
    const menu = document.querySelector('.header__menu')
    const transit = document.querySelector('.logo-image-wrapper__burger-menu')

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-active')
        transit.classList.toggle('transition')
    })
}

navSlide()