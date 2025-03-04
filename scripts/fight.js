//получаем данные из куков
let team = parseInt(getCookie('team'));
if(team === 0){
    team = 'mge';
}else if(team === 1){
    team = 'femboy';
}else{
    history.forward();
}

let enemySprites = [];
for(let i = 1; i < 6; i++){
    enemySprites.push('assets/enemies/' + team + '/' + team + i + '.png');
}

//С ЭТОГО МОМЕНТА МОЖЕТ БЫТЬ ПОЛНЫЙ БРЕД, Я БЫЛ СОННЫЙ В ХЛАМИНУ
let enemyHealth = random(100, 1000);
let money = 0;
if(getCookie('money') !== null){
    money = parseInt(getCookie('money'));
}

const health = document.querySelector('.enemy-health');
const enemy = document.querySelector('.enemy');
const moneyText = document.querySelector('.money-container');
enemy.src = 'assets/enemies/' + team + '/' + team + '3.png';

health.innerHTML = 'Здоровье: ' + enemyHealth;
moneyText.innerHTML = 'Деньги: ' + money;

document.addEventListener('click', function(){
    enemyHealth -= 10;
    health.innerHTML = 'Здоровье: ' + enemyHealth;
    if(enemyHealth <= 0){
        money += random(10, 20);
        moneyText.innerHTML = 'Деньги: ' + money;
        setCookie('money', money, 999);

        enemyHealth = random(100, 1000);
        health.innerHTML = 'Здоровье: ' + enemyHealth;
    }
});