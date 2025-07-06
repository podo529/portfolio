const topSwiper = new Swiper('.top_banner',{
        pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


const swiper = new Swiper(".look_book_swiper", {
    direction: 'horizontal', // 가로 방향 슬라이드
    slidesPerView: 'auto',   // 자동 슬라이드 너비 설정
    spaceBetween: 20,        // 슬라이드 간 간격
    freeMode: true,          // 드래그로 자유롭게 움직이기
    watchOverflow: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, // 드래그 가능하도록 설정
        hide: false      // 항상 보이게
    },
});