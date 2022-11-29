document.addEventListener('DOMContentLoaded', () => {
    let headerMenu = document.querySelector('.header__nav');
    document.addEventListener('click', e => {
        // burger
        const target = e.target;
        if (target.classList.contains('burger')) {
            target.querySelector('#nav-icon2').classList.toggle('open');
            headerMenu.classList.toggle('active');
        }
        // popup request
        if (target.classList.contains('popup-order')) {
            let popupAnimateClose = document.querySelector('.popup-order').animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
            popupAnimateClose.addEventListener('finish', () => {
                document.querySelector('.popup-order').style.display = 'none';
            })
        }
        if (target.classList.contains('js-show-popup-order')) {
            document.querySelector('.popup-order').style.display = 'flex';
            document.querySelector('.popup-order').animate([
                { opacity: 0 },
                { opacity: 1 }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
        }
        // popup-alert
        if (target.classList.contains('popup-alert') || target.classList.contains('popup-alert__close')) {
            let popupAlertAnimate = document.querySelector('.popup-alert').animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
            popupAlertAnimate.addEventListener('finish', () => {
                document.querySelector('.popup-alert').style.display = 'none';
            })
        }
    });
    let registrFormSubmit = document.querySelector('.js-field-submit');
    if (registrFormSubmit) {
        let firstPass = document.querySelector('#first-pass');
        let secPass = document.querySelector('#second-pass');
        registrFormSubmit.addEventListener('click', e => {
            if (firstPass.value != secPass.value) {
                e.preventDefault();
                alert('Пароли не совпадают');
            }
        })
    }
});

function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}



window.onload = () => {
    // $.fn.setCursorPosition = function(pos) {
    //     if ($(this).get(0).setSelectionRange) {
    //         $(this).get(0).setSelectionRange(pos, pos)
    //     } else if ($(this).get(0).createTextRange) {
    //         var range = $(this).get(0).createTextRange()
    //         range.collapse(true)
    //         range.moveEnd('character', pos)
    //         range.moveStart('character', pos)
    //         range.select()
    //     }
    // }
    // $('input[type="tel"]').on('click', function() {
    //     $(this).setCursorPosition(3)
    // }).mask('+7 (999) 999 99 99')
    $('.service__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="64" height="50" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="39" cy="25" r="24.25" stroke="white" stroke-width="1.5"/><path d="M1 25H50M50 25L42.2632 14M50 25L42.2632 36" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="64" height="50" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="24.25" transform="matrix(-1 0 0 1 25 25)" stroke="#fff" stroke-width="1.5"/><path d="M63 25H14M14 25L21.7368 14M14 25L21.7368 36" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            }
        }]
    })
};

$('body').on('click', '.password-checkbox', function() {
    if ($(this).is(':checked')) {
        // $('#password-input').attr('type', 'text');
        $(this).parent().prev().attr('type', 'text');
        $(this).parent().addClass('active');
    } else {
        // $('#password-input').attr('type', 'password');
        $(this).parent().prev().attr('type', 'password');
        $(this).parent().removeClass('active');
    }
});

$('.partners__items').slick({
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#FEED01"/><path d="M35.707 25.7071C36.0976 25.3166 36.0976 24.6834 35.707 24.2929L29.3431 17.9289C28.9526 17.5384 28.3194 17.5384 27.9289 17.9289C27.5383 18.3195 27.5383 18.9526 27.9289 19.3431L33.5857 25L27.9289 30.6569C27.5383 31.0474 27.5383 31.6805 27.9289 32.0711C28.3194 32.4616 28.9526 32.4616 29.3431 32.0711L35.707 25.7071ZM14.9999 26H34.9999V24H14.9999V26Z" fill="black"/></svg></button>',
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25.0001" r="25" fill="#FEED01"/><path d="M14.2929 25.7072C13.9024 25.3166 13.9024 24.6835 14.2929 24.293L20.6569 17.929C21.0474 17.5385 21.6805 17.5385 22.0711 17.929C22.4616 18.3195 22.4616 18.9527 22.0711 19.3432L16.4142 25.0001L22.0711 30.6569C22.4616 31.0474 22.4616 31.6806 22.0711 32.0711C21.6805 32.4617 21.0474 32.4617 20.6569 32.0711L14.2929 25.7072ZM35 26.0001H15V24.0001H35V26.0001Z" fill="black"/></svg></button>',
    responsive: [{
            breakpoint: 1450,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.sertificate__items').slick({
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#FEED01"/><path d="M35.707 25.7071C36.0976 25.3166 36.0976 24.6834 35.707 24.2929L29.3431 17.9289C28.9526 17.5384 28.3194 17.5384 27.9289 17.9289C27.5383 18.3195 27.5383 18.9526 27.9289 19.3431L33.5857 25L27.9289 30.6569C27.5383 31.0474 27.5383 31.6805 27.9289 32.0711C28.3194 32.4616 28.9526 32.4616 29.3431 32.0711L35.707 25.7071ZM14.9999 26H34.9999V24H14.9999V26Z" fill="black"/></svg></button>',
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25.0001" r="25" fill="#FEED01"/><path d="M14.2929 25.7072C13.9024 25.3166 13.9024 24.6835 14.2929 24.293L20.6569 17.929C21.0474 17.5385 21.6805 17.5385 22.0711 17.929C22.4616 18.3195 22.4616 18.9527 22.0711 19.3432L16.4142 25.0001L22.0711 30.6569C22.4616 31.0474 22.4616 31.6806 22.0711 32.0711C21.6805 32.4617 21.0474 32.4617 20.6569 32.0711L14.2929 25.7072ZM35 26.0001H15V24.0001H35V26.0001Z" fill="black"/></svg></button>',
    responsive: [{
        breakpoint: 1240,
        settings: {
            slidesToShow: 1
        }
    }]
})