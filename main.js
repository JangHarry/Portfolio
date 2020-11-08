'use strict'

// navbar 를  투명, 불투명 처리하는 부분
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    //console.log('navbarHeight',navbarHeight); 길이 확인용
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})


// Handle scrolling 

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', ()=>{
    
    const target = event.target;
    const link = target.dataset.link;

    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

//반응형 Navbar 만들기
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})


// Handle click on "contact me" button on home


const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    scrollIntoView(link);
})


// 홈페이지 스크롤 시 투명도 늘어나는 방식
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight
    
})

//스크롤  내리면 보여지는 함수
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
})

// 에로우 버튼 클릭 시 발생되는 함수
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
})


//프로젝트

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    

    setTimeout(()=>{
        projects.forEach((project) => {
        
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);

});


function scrollIntoView(selector) {
    const scollTo = document.querySelector(selector);
    scollTo.scrollIntoView({behavior: 'smooth'}); 
}



