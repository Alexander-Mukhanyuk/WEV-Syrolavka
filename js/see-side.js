jQuery(document).ready(function($){
    $('.side-menu').fadeOut(); //скрываем кнопку
    $(window).scroll(function () {
    if ($(this).scrollTop() >10) { // при прокрутке страницы на 200 пикселей вниз
    $('.side-menu').fadeIn();   // отображаем кнопку
    } else {
    $('.side-menu').fadeOut(); // в противном случае скрываем
    }
    });
    });