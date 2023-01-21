let attackPlayer;
let attackEnemy;
let lifePlayer = 3;
let lifeEnemy = 3;

function initGame(){
    let btnPetPlayer = document.getElementById('btn-pet');
    btnPetPlayer.addEventListener('click', selectPetPlayer);

    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.addEventListener('click', attackFuego);

    let btnAgua = document.getElementById('btn-agua');
    btnAgua.addEventListener('click', attackAgua);
    
    let btnPlanta = document.getElementById('btn-planta');
    btnPlanta.addEventListener('click', attackPlanta);
}

function selectPetPlayer(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanPetPlayer = document.getElementById('pet-player');

    if (inputHipodoge.checked) spanPetPlayer.innerHTML = 'Hipodoge';
    else if (inputCapipepo.checked) spanPetPlayer.innerHTML = 'Capipepo';
    else if (inputRatigueya.checked) spanPetPlayer.innerHTML = 'Ratigueya';
    else return alert('Selecciona una mascota');

    selectPetEnemy();
}

function selectPetEnemy (){
    let petEnemy = numsRandom(1,3);
    let spanPetEnemy = document.getElementById('pet-enemy');

    if(petEnemy === 1) {
        spanPetEnemy.innerHTML = 'Hipodoge';
    } else if (petEnemy === 2){
        spanPetEnemy.innerHTML = 'Capipepo';
    } else {
        spanPetEnemy.innerHTML = 'Ratigueya';
    }
}

function attackFuego(){
    attackPlayer = 'Fuego';
    enemyAttack();
}

function attackAgua(){
    attackPlayer = 'Agua';
    enemyAttack();
}

function attackPlanta(){
    attackPlayer = 'Planta';
    enemyAttack();
}

function enemyAttack(){
    let randomAttack = numsRandom(1,3);
    if (randomAttack === 1) attackEnemy = 'Fuego';
    else if (randomAttack === 2) attackEnemy = 'Agua';
    else attackEnemy = 'Planta';

    combat();
}

function combat(){
    let spanLifePlayer = document.getElementById('life-player');
    let spanLifeEnemy = document.getElementById('life-enemy');

    if (attackEnemy === attackPlayer){
        createMessage('Empate');
    } else if (attackPlayer === 'Fuego' && attackEnemy  === 'Planta'){
        createMessage('Ganaste');
        lifeEnemy --;
        spanLifeEnemy.innerHTML = lifeEnemy;
    } else if (attackPlayer === 'Agua' && attackEnemy  === 'Fuego'){
        createMessage('Ganaste');
        lifeEnemy --;
        spanLifeEnemy.innerHTML = lifeEnemy;
    } else if (attackPlayer === 'Planta' && attackEnemy  === 'Agua'){
        createMessage('Ganaste');
        lifeEnemy --;
        spanLifeEnemy.innerHTML = lifeEnemy;
    } else {
        createMessage('Perdiste');
        lifePlayer --;
        spanLifePlayer.innerHTML = lifePlayer;
    }
}

function createMessage(resultCombat){
    let sectionMessage = document.getElementById('messages');
    let para = document.createElement('p');
    para.innerHTML = 'Tu mascota atacó con ' + attackPlayer + ', la mascota del enemigo atacó con ' + attackEnemy + ' - ' + resultCombat;

    sectionMessage.appendChild(para);
}

function numsRandom (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', initGame);