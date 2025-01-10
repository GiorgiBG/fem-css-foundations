const nav = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu')
const closeMenuBtn = document.querySelector('.close-menu')



menuBtn.addEventListener('click', ()=>{
    nav.classList.add('nav--visible')
    menuBtn.classList.add('menu--hide')
    closeMenuBtn.classList.add('close--show')
})

closeMenuBtn.addEventListener('click',()=>{
    nav.classList.remove('nav--visible')
    menuBtn.classList.remove('menu--hide')
    closeMenuBtn.classList.remove('close--show')
})
