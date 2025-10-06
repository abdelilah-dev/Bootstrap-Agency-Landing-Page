import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

const swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        '@0.0': {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.25': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
})
