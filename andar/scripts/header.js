const searchCloseBtn = document.querySelector('.search_close_btn');
const searchBtn = document.querySelector('.search_btn1');
const searchForm = document.querySelector('.search_bg');
const lnbWrap = document.querySelector('.lnb_wrap');
const gnb = document.querySelector('.gnb');
console.log(searchBtn, searchForm);
searchForm.style.display = 'none';
lnbWrap.style.transform = 'translateY(-450px)';
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