//получаем данные из куков
let team = parseInt(getCookie('team'));
if(team === 0){
    team = 'mge';
}else if(team === 1){
    team = 'femboy';
}else{
    history.forward();
}

let money;
let damage;
let armor;
let attackSpeed;
let difficulty; //

if(getCookie('money')){
    money = parseInt(getCookie('money'));
}else{
    money = 0;
}
if(getCookie('damage')){
    damage = parseInt(getCookie('damage'));
}else{
    damage = 10;
}
if(getCookie('armor')){
    armor = parseInt(getCookie('armor'));
}else{
    armor = 0;
}
if(getCookie('attackSpeed')){
    attackSpeed = parseFloat(getCookie('attackSpeed'));
}else{
    attackSpeed = 1;
}

let attacking = false;

//массив с путями картинок врагов
let enemySprites = [];
for(let i = 1; i < 6; i++){
    enemySprites.push('assets/enemies/' + team + '/' + team + i + '.png');
}

//С ЭТОГО МОМЕНТА МОЖЕТ БЫТЬ ПОЛНЫЙ БРЕД, Я БЫЛ СОННЫЙ В ХЛАМИНУ
let enemyHealth = random(100, 200);

const health = document.querySelector('.enemy-health');
health.innerHTML = 'Здоровье: ' + enemyHealth;

const moneyText = document.querySelector('.money-container');
moneyText.innerHTML = 'Деньги: ' + money;

const enemy = document.querySelector('.enemy');
let randomizer1 = random(0, 4)
enemy.src = enemySprites[randomizer1];

document.addEventListener('click', function(){
    //атака
    if(!attacking){
    attacking = true;
    let attackSprite = document.createElement('img');
    attackSprite.src = 'assets/attack.webp';
    attackSprite.style.position = 'absolute';
    attackSprite.style.top = random(110, (window.innerHeight / 3)) + 'px';
    attackSprite.style.left = random(26, (window.innerWidth - 26)) + 'px';
    document.body.append(attackSprite);
    setTimeout(function(){
        attackSprite.remove();
    }, 900);

    setTimeout(function(){
        enemyHealth -= damage;
        health.innerHTML = 'Здоровье: ' + enemyHealth;
        if(!(enemy.classList.contains('attacked'))){
            setTimeout(function(){
                enemy.classList.remove('attacked');
            }, 500);
        }
    enemy.classList.add('attacked');

    //последствия атаки
    if(enemyHealth <= 0){
        enemy.classList.remove('attacked');
        money += random(10, 20);
        moneyText.innerHTML = 'Монеты: ' + money;
        setCookie('money', money, 999);
        enemyHealth = random(100, 200);
        health.innerHTML = 'Здоровье: ' + enemyHealth;

        let randomizer2 = random(0, 4);
        while(randomizer1 === randomizer2){
            randomizer2 = random(0, 4);
        }
        randomizer1 = randomizer2;
        enemy.src = enemySprites[randomizer2];
    }

    attacking = false;
    }, (1500 / attackSpeed));
    }
});