let Score = document.querySelector('#score')
let iconClose = document.querySelector('.icon-close');
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let Rules = document.querySelector('.rules');
let Step1 = document.querySelector('.step-1');
let Step2 = document.querySelector('.step-2');
let House = document.querySelector('#house')
let User = document.querySelector('#user')
let result = document.querySelector('.result h1')
let Begin = document.querySelector('.begin');

let score = 0;
let UserSelection = "";
let HouseSelection = ""
let HouseOptions = ["paper","scissors","rock"];

iconClose.addEventListener('click', () => {
    modal.classList.add('hide-modal')
    overlay.classList.add('hide-overlay')
})

Rules.addEventListener('click',()=>{
    modal.classList.remove('hide-modal')
    overlay.classList.remove('hide-overlay')
})
Step1.addEventListener('click', (e) => {
    UserSelection = e.target.id;
    setTimeout(() => {
        Step1.classList.add('remove');

    }, 200)
    setTimeout(()=>{
        Step2.classList.remove('remove');
        User.classList.add(`${UserSelection}`)
    },200)
    setTimeout(()=>{
        House.classList.remove('house')
        House.classList.add('disc-selected')
        HouseSelection = HouseOptions[Math.floor(Math.random()*3)]
        House.classList.add(`${HouseSelection}`)
    },1000);

    setTimeout(()=>{
        Step2.classList.add('show-result')
        // console.log(checkWinner())
        switch(checkWinner()){
            case 'draw':
                result.textContent = 'DRAW';
                break;
            case 'house':
                result.textContent = 'YOU LOSE';
                score--;
                break;
            case 'user':
                result.textContent = 'YOU WIN';
                score++;
        }
        Score.textContent = score
    },2000)
})

function checkWinner(){
    console.log(UserSelection, HouseSelection)
    if(UserSelection==='paper'&&HouseSelection==='rock'){
        return 'user';
    }
    else if (UserSelection==='paper'&&HouseSelection === 'scissors'){
        return 'house';
    }
    else if (UserSelection==='scissors'&&HouseSelection==='paper'){
        return 'user';
    }
    else if (UserSelection === 'scissors' && HouseSelection === 'rock'){
        return 'house';
    }
    else if (UserSelection === 'rock' && HouseSelection=== 'scissors'){
        return 'user';
    }
    else if (UserSelection === 'rock' && HouseSelection === 'paper'){
        return 'house';
    }
    return 'draw';
};

Begin.addEventListener('click',()=>{
    Step2.className = "step-2";
    Step2.classList.add('remove')
    Step1.classList.remove('remove');
    House.className = "house"
    User.className = "disc-selected"
    Score.textContent = score;
    UserSelection = '';
    HouseSelection = '';
})