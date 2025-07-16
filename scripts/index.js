const nav = document.querySelectorAll('nav a');
const slidePage = document.querySelectorAll('#wrap .swiper_wrapper > .slide');
console.log(slidePage)
//전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
    on: {
        slideChange:function(){
            const activeSlide = this.slides[this.activeIndex];
            nav.forEach((i) => {
                i.classList.remove('active');
            });
            if(activeSlide == slidePage[3]){
                nav.forEach((i) => {
                    i.classList.add('active');
                });
            }else if(activeSlide == slidePage[4]){
                nav.forEach((i) => {
                    i.classList.add('active');
                });
            }else{
                nav.forEach((i) => {
                    i.classList.remove('active');
                });
            };
            for(let i of nav) i.classList.remove('active2');
            nav[this.activeIndex].classList.add('active2');
        },
    },
})

//web-projects
const project = new Swiper('#project_swiper',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }
})

//design
const bnrDesign = new Swiper('#bnr_swiper',{
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{delay:0,},
    speed:6000,
    loop:true,
})
const longDesign = new Swiper('#long_swiper',{
    slidesPerView:3.5,
    spaceBetween:30,
    autoplay:{delay:0,},
    speed:6000,
    loop:true,
})
const detailDesign = new Swiper('#detail_swiper',{
    slidesPerView:1,
    autoplay:{delay:1000,},
    speed:6000,
    loop:true,
})

//nav
console.log(nav);
//변수 대상 클릭 시 slideTo(wrap, 0)
nav.forEach((obj, idx)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault();
        wrap.slideTo(idx, 1000);
    })
})

//popup

const designImg = document.querySelectorAll('#design .swiper-slide img');
const popup = document.querySelector('.popup_bg');
console.log(designImg, popup);

console.log(designImg);
for(let i of designImg){
    i.addEventListener('click',()=>{
        popup.style.display = 'block';
        popup.children[0].children[0].src = i.src;
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();//스크롤 풀기 = enable();
    })
}

popup.addEventListener('click',()=>{
    popup.style.display='none'
    wrap.mousewheel.enable();
})