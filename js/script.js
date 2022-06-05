
let iconClose = document.querySelector('.icon-close');
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')

iconClose.addEventListener('click',()=>{
    modal.classList.add('hide-modal')
    overlay.classList.add('hide-overlay')
})