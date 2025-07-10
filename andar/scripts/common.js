//데스크톱 nav 변수
const searchCloseBtn = document.querySelector('.search_close_btn');
const searchBtn = document.querySelector('.search_btn1');
const searchForm = document.querySelector('.search_bg');
const lnbWrap = document.querySelector('.lnb_bg');
const gnb = document.querySelector('.gnb');
//모바일,태블릿 nav 변수
const menuOpenBtn = document.querySelector('.menu_btn');
const mobileRightMenu = document.querySelector('.mobile_menu');
const menuCloseBtn = document.querySelector('.mobile_menu .top img');
const menuMore = document.querySelectorAll('.menu_more_tab');
const menuMoreBtn = document.querySelectorAll('.menu_more_btn img');
const mobileLnb = document.querySelectorAll('.mobile_menu .mobile_lnb');
//console.log(searchBtn, searchForm);

//footer 변수
const footerBg = document.querySelector('.footer_wrap')
const andarInfoBtn = document.querySelector('.andar_info');
const andarInfoContent = document.querySelector('.middle_footer');
const andarInfoBtnImg = document.querySelector('.andar_info img')
//console.log(andarInfoContent)



//-------------------------------header
//기초 셋팅
searchForm.style.display = 'none';
lnbWrap.style.transform = 'translateY(-450px)';
//lnbWrap.style.display = 'none';
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

for(let i=0; i<11; i++){
    mobileLnb[i].style.display = 'none';
    menuMore[i].addEventListener('click',()=>{
        if(mobileLnb[i].style.display == 'block'){
            mobileLnb[i].style.display = 'none';
            menuMoreBtn[i].src = './images/arrow_drop_down.png';
        }else{
            for(let j=0; j<11; j++){
                mobileLnb[j].style.display = 'none';
                menuMoreBtn[j].src = './images/arrow_drop_down.png';
            }
            mobileLnb[i].style.display = 'block';
            menuMoreBtn[i].src = './images/arrow_drop_up.png';
        }
    });
}




//----------------------------------footer
andarInfoBtn.addEventListener('click',()=>{
    if(andarInfoContent.style.display == 'block'){
        andarInfoContent.style.display = 'none';
        andarInfoBtnImg.src = './images/arrow_info_icon.png';
    }else{
        andarInfoContent.style.display = 'block'
        andarInfoBtnImg.src = './images/arrow_info_icon_down.png';
    }
})