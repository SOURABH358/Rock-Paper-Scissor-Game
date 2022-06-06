
let iconClose = document.querySelector('.icon-close');
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let Rules = document.querySelector('.rules');
let StepOne = document.querySelector('.step-1');
let Step2 = document.querySelector('.step-2')
let UserSelection = "";
iconClose.addEventListener('click', () => {
    modal.classList.add('hide-modal')
    overlay.classList.add('hide-overlay')
})

Rules.addEventListener('click',()=>{
    modal.classList.remove('hide-modal')
    overlay.classList.remove('hide-overlay')
})
StepOne.addEventListener('click', (e) => {
    UserSelection = e.target.id;
    setTimeout(() => {
        StepOne.classList.add('remove');

    }, 200)
    setTimeout(()=>{
        Step2.classList.remove('remove');
    },200)
})