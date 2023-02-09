let attackPlayer;
let attackEnemy;
let lifePlayer = 3;
let lifeEnemy = 3;

function initGame(){
    let btnPetPlayer = document.getElementById('btn-pet');
    let btnFuego = document.getElementById('btn-fuego');
    let btnAgua = document.getElementById('btn-agua');
    let btnPlanta = document.getElementById('btn-planta');
    let reebootGame = document.getElementById('btn-reboot');

    reebootGame.addEventListener('click', gameReboot);
    btnPlanta.addEventListener('click', attackPlanta);
    btnAgua.addEventListener('click', attackAgua);
    btnFuego.addEventListener('click', attackFuego);
    btnPetPlayer.addEventListener('click', selectPetPlayer);

    let attackSection = document.getElementById('select-attack');
    let messageSection = document.getElementById('messages');
    let rebootSection = document.getElementById('reboot-play');
    attackSection.style.display = 'none';
    messageSection.style.display = 'none';
    rebootSection.style.display = 'none';
}

function selectPetPlayer(){
    let messageSection = document.getElementById('messages');
    let attackSection = document.getElementById('select-attack');
    let petSection = document.getElementById('select-pet');

    attackSection.style.display = 'block';
    messageSection.style.display = 'block';
    petSection.style.display = 'none';

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya'); 
    let btnPetPlayer = document.getElementById('btn-pet');   
    let spanPetPlayer = document.getElementById('pet-player');

    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = 'Hipodoge'; 
    }else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = 'Capipepo';
    }else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = 'Ratigueya';
    }else {
        gameReboot();
        return alert('Selecciona una mascota');
    }

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

    revisarVidas();
}

function revisarVidas(){
    if (lifeEnemy === 0){
        createFinalMessage('Enhorabuena, ganaste el combate');
    } else if (lifePlayer === 0){
        createFinalMessage('Perdiste el combate');
    }
}

function createMessage(resultCombat){
    let sectionMessage = document.getElementById('messages');
    let parafo = document.createElement('p');
    parafo.innerHTML = 'Tu mascota atacó con ' + attackPlayer + ', la mascota del enemigo atacó con ' + attackEnemy + ' - ' + resultCombat;
    sectionMessage.appendChild(parafo);
}

function createFinalMessage(resultaFinal){
    let sectionMessage = document.getElementById('messages');
    let parafo = document.createElement('p');
    parafo.innerHTML = resultaFinal;
    sectionMessage.appendChild(parafo);

    let rebootSection = document.getElementById('reboot-play');
    rebootSection.style.display = 'block';
    
    let btnFuego = document.getElementById('btn-fuego');
    let btnAgua = document.getElementById('btn-agua');
    let btnPlanta = document.getElementById('btn-planta');

    btnPlanta.disabled = true;
    btnAgua.disabled = true;
    btnFuego.disabled = true;
}

function gameReboot(){
    location.reload();
}

function numsRandom (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', initGame);