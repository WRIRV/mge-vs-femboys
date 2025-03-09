//чтение куков
let team = parseInt(getCookie('team'));
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

//объекты в главном меню
const teamText = document.querySelector('.team-desc');
const html = document.querySelector('html');
const resetButton = document.querySelector('.reset-button');
const playButton = document.querySelector('.play-button');
const mainButtons = document.querySelectorAll('.main-container img');

//оверлей кнопок
const closing = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

//секции по кнопкам
const buttonContainers = document.querySelectorAll('.overlay div');

//характеристики
const stats = document.querySelectorAll('.player-stats li');
const moneyText = document.querySelector('.money-container');
const difficultyText = document.querySelector('.difficulty-container');

//выбор команды и всё, что связано с ней
if(team === 0){
    teamText.innerHTML += ' ' + teamText.dataset.c0;
    html.classList.add('html-fmb');
    resetButton.classList.add('button-fmb');
    playButton.classList.add('button-fmb');
    mainButtons.forEach(function(button){
        button.classList.add('button-fmb');
    });
}else if(team === 1){
    teamText.innerHTML += ' ' + teamText.dataset.c1;
    html.classList.add('html-mge');
    resetButton.classList.add('button-mge');
    playButton.classList.add('button-mge');
    mainButtons.forEach(function(button){
        button.classList.add('button-mge');
    });
}

resetButton.addEventListener('click', function(){
    deleteData();
    location.reload();
});

playButton.addEventListener('click', function(){
    window.location.href = 'fight.html';
});

//нажатие на кнопки
mainButtons.forEach(function(button){
    button.addEventListener('click', function(){
        closing.classList.remove('delete');
        overlay.classList.remove('delete');
        buttonContainers.forEach(function(cont){
            cont.classList.add('delete');
        });

        if(button.classList.contains('stats')){
            buttonContainers.forEach(function(cont){
                if(cont.classList.contains('stats-container')){
                    cont.classList.remove('delete');
                    interfaceUpdate();
                }
            });
        }

        if(button.classList.contains('inventory')){
            buttonContainers.forEach(function(cont){
                if(cont.classList.contains('inventory-container')){
                    cont.classList.remove('delete');
                }
            });
        }

        if(button.classList.contains('shop')){
            buttonContainers.forEach(function(cont){
                if(cont.classList.contains('shop-container')){
                    cont.classList.remove('delete');
                }
            });
        }
    });
});

//кнопка закрытия
closing.addEventListener('click', function(){
    closing.classList.add('delete');
    overlay.classList.add('delete');
});

//прокачка характеристик
stats.forEach(function(stat){
    stat.addEventListener('click', function(){
        if(money >= 10){
            money -= 10;
            setCookie('money', money, 999);
            if(stat.classList.contains('damage-container')){
                damage++;
                setCookie('damage', damage, 999);
            }
            if(stat.classList.contains('armor-container')){
                armor++;
                setCookie('armor', armor, 999);
            }
            if(stat.classList.contains('attack_speed-container')){
                attackSpeed =  parseFloat((attackSpeed + 0.1).toFixed(2));
                setCookie('attackSpeed', attackSpeed, 999);
            }
            interfaceUpdate();
        }
    });
});