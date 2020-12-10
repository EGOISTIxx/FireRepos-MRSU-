// let app = () => {
//     const lists = document.querySelectorAll('.services-list__link')
//     const selection = document.querySelectorAll('.selec')

//     let filter = (category, items) => {
//         items.forEach((item) => {
//             const isItemFiltered = !item.classList.contains(category)
//             if(isItemFiltered){
//                 item.classList.add('show')
//             } else{
//                 item.classList.remove('show')
//             }
//         })
//     }

//     lists.forEach(list => {
//         list.addEventListener('mouseover', () => {
//             const currentCategory = list.dataset.filter
//             filter(currentCategory, selection)

//         })
//     })
// }

// app()

// $('.test').hover(
//     function(){
//         $('.test2').css('background-color','#FF0');
//     },
//     function(){
//         $('.test2').css('background-color','#FFF');
//     }
// );

// $(function () {
//     let list = $('div ul .services-list__link1');
//     list.hover(
//         function () {
//             $('.info-section-services__wrapper .selection1').addClass('hide');
//         },
//         function () {
//             $('.info-section-services__wrapper .selection1').removeClass('hide');
//         });
// })

$(function () {
    let list = $('div ul .services-list__link2');
    list.hover(
        function () {
            $('.info-section-services__wrapper .selection2').addClass('show');
            $('.info-section-services__wrapper .selection1').addClass('hide');
        },
        function () {
            $('.info-section-services__wrapper .selection2').removeClass('show');
            $('.info-section-services__wrapper .selection1').removeClass('hide');
        });
})

$(function () {
    let list = $('div ul .services-list__link4');
    list.hover(
        function () {
            $('.info-section-services__wrapper .selection3').addClass('show');
            $('.info-section-services__wrapper .selection1').addClass('hide');
        },
        function () {
            $('.info-section-services__wrapper .selection3').removeClass('show');
            $('.info-section-services__wrapper .selection1').removeClass('hide');
        });
})

$(function () {
    let list = $('div ul .services-list__link5');
    list.hover(
        function () {
            $('.info-section-services__wrapper .selection4').addClass('show');
            $('.info-section-services__wrapper .selection1').addClass('hide');
        },
        function () {
            $('.info-section-services__wrapper .selection4').removeClass('show');
            $('.info-section-services__wrapper .selection1').removeClass('hide');
        });
})