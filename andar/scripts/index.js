/* 1행 배너 */

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

/* 추천 조합 */
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

const newCategoryBtn = document.querySelectorAll('.category_btn_new button');
const bestCategoryBtn = document.querySelectorAll('.category_btn_best button');
const lookbookCategoryBtn = document.querySelectorAll('.category_btn_lookbook button');

const newProductList = document.querySelectorAll('.new_product_wrap .product_list');
const bestProductList = document.querySelectorAll('.best_right .product_best_right');
const lookbookProductList = document.querySelectorAll('.look_book_swiper');

//active
/* newCategoryBtn.forEach(Click => {
    Click.addEventListener('click',function(e) {
        newCategoryBtn.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    })
});
bestCategoryBtn.forEach(Click => {
    Click.addEventListener('click',function(e) {
        bestCategoryBtn.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    })
}); */
/* newCategoryBtn.forEach(Click => {
    Click.addEventListener('click',function(e) {
        newCategoryBtn.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    })
}); */



/* 신상 */

for(let i=0; i<3; i++){
    newCategoryBtn[i].addEventListener('click',()=>{
        if(newCategoryBtn[i].style.color == '#fff'){
            newCategoryBtn[i].style.backgroundColor = '#fff';
            newCategoryBtn[i].style.color = '#000';
        }else{
            for(let j=0; j<3; j++){
                newCategoryBtn[j].style.backgroundColor = '#fff';
                newCategoryBtn[j].style.color = '#000';
            }
            newCategoryBtn[i].style.backgroundColor = '#C86734';
            newCategoryBtn[i].style.color = '#fff';
        }
    });
}

newCategoryBtn.forEach((obj,ind)=>{
    obj.addEventListener('click',()=>{
        for(let i of newProductList){i.style.display = 'none'}
        newProductList[ind].style.display = 'flex';
    })
})



/* 베스트 */
for(let i=0; i<3; i++){
    bestCategoryBtn[i].addEventListener('click',()=>{
        if(bestCategoryBtn[i].style.color == '#fff'){
            bestCategoryBtn[i].style.backgroundColor = '#fff';
            bestCategoryBtn[i].style.color = '#000';
        }else{
            for(let j=0; j<3; j++){
                bestCategoryBtn[j].style.backgroundColor = '#fff';
                bestCategoryBtn[j].style.color = '#000';
            }
            bestCategoryBtn[i].style.backgroundColor = '#C86734';
            bestCategoryBtn[i].style.color = '#fff';
        }
    });
}

bestCategoryBtn.forEach((obj,ind)=>{
    obj.addEventListener('click',()=>{
        for(let i of bestProductList){i.style.display = 'none'}
        bestProductList[ind].style.display = 'flex';
    })
})

/* 추천조합 */


for(let i=0; i<3; i++){
    lookbookCategoryBtn[i].addEventListener('click',()=>{
        if(lookbookCategoryBtn[i].style.color == '#fff'){
            lookbookCategoryBtn[i].style.backgroundColor = '#fff';
            lookbookCategoryBtn[i].style.color = '#000';
        }else{
            for(let j=0; j<3; j++){
                lookbookCategoryBtn[j].style.backgroundColor = '#fff';
                lookbookCategoryBtn[j].style.color = '#000';
            }
            lookbookCategoryBtn[i].style.backgroundColor = '#C86734';
            lookbookCategoryBtn[i].style.color = '#fff';
        }
    });
}

lookbookCategoryBtn.forEach((obj,ind)=>{
    obj.addEventListener('click',()=>{
        for(let i of lookbookProductList){i.style.display = 'none'}
        lookbookProductList[ind].style.display = 'flex';
    })
})




