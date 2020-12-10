$(function () {
    let modalwindow = $('.header__menu .header__menu-main-text .sign-up')
    modalwindow.click(
        function(){
            $('.header-wrapper__logo-image .header__sign-up').addClass('form-active')
        })
    let closeModalWindow = $('.modal__cross')
    closeModalWindow.click(
        function(){
            $('.header-wrapper__logo-image .header__sign-up').removeClass('form-active')
        }
    )
})

$(function () {
    let modalwindow = $('.header__menu .header__menu-main-text .sign-in')
    modalwindow.click(
        function(){
            $('.header-wrapper__logo-image .header__sign-in').addClass('form-active')
        })
    let closeModalWindow = $('.modal__cross')
    closeModalWindow.click(
        function(){
            $('.header-wrapper__logo-image .header__sign-in').removeClass('form-active')
        }
    )
})

// $(function () {
//     let bodyClickClose = $('body')
//     bodyClickClose.click(
//         function(){
//             $('.header-wrapper__logo-image .header__sign-up').removeClass('form-active')
//             $('.header-wrapper__logo-image .header__sign-in').removeClass('form-active')
//         }
//     )
// })