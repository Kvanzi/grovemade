new Swiper('.product__swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    loop: true,
    speed: 600,
    spaceBetween: 25,
    groupSpaceBetween: 100,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    
    breakpoints: {
        850: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        635: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        425: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});

const up_btn = document.querySelector('.go-up__btn');

function goUp () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

up_btn.addEventListener('click', goUp);