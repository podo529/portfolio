//데스크톱 nav 변수
const searchCloseBtn = document.querySelector('.search_close_btn');
const searchBtn = document.querySelector('.search_btn1');
const searchForm = document.querySelector('.search_bg');
const lnbWrap = document.querySelector('.lnb_wrap');
const gnb = document.querySelector('.gnb');
//모바일,태블릿 nav 변수
const menuOpenBtn = document.querySelector('.menu_btn');
const mobileRightMenu = document.querySelector('.mobile_menu');
const menuCloseBtn = document.querySelector('.mobile_menu .top img');
const menuMoreBtn = document.querySelectorAll('.menu_more_btn img');
const mobileLnb = document.querySelectorAll('.mobile_menu .lnb');
//console.log(searchBtn, searchForm);

//기초 셋팅
searchForm.style.display = 'none';
lnbWrap.style.transform = 'translateY(-450px)';

mobileRightMenu.style.display = 'none';


//데스크톱 함수
searchBtn.addEventListener('click',()=>{
    searchForm.style.display = 'block';
});
searchCloseBtn.addEventListener('click',()=>{
    searchForm.style.display = 'none';
});
gnb.addEventListener('mouseover',()=>{
    //lnbWrap.style.display = 'flex';
    lnbWrap.style.transform = 'translateY(0)';
    lnbWrap.style.transition = 'all 0.5s';
});
lnbWrap.addEventListener('mouseover',()=>{
    //lnbWrap.style.display = 'flex';
    lnbWrap.style.transform = 'translateY(0)';
    lnbWrap.style.transition = 'all 0.5s';
});
lnbWrap.addEventListener('mouseout',()=>{
    //lnbWrap.style.display = 'none';
    lnbWrap.style.transform = 'translateY(-450px)';
    lnbWrap.style.transition = 'all 0.5s';
});

//모바일 함수
menuOpenBtn.addEventListener('click',()=>{
    mobileRightMenu.style.display = 'block';
})
menuCloseBtn.addEventListener('click',()=>{
    mobileRightMenu.style.display = 'none';
})
menuMoreBtn.forEach((obj, ind, arr)=>{
    mobileLnb.forEach((obj, ind, arr)=>{
        obj.style.display = 'none';
        menuMoreBtn[ind].addEventListener('click',()=>{
            mobileLnb[ind].style.display = 'block';
            menuMoreBtn[ind].src = './images/arrow_drop_up.png';
        })
    })
})

