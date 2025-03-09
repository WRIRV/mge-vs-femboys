//куки-функции
function setCookie(name, value, days){
    document.cookie = name + '=' + value + ';max-age=' + (days*24*60*60) + ';path=/';
}
function getCookie(name) {
    const values = document.cookie.split(';');
    const metaValue = name + '=';
    for (let value of values) {
        value = value.trim();
        if (value.indexOf(metaValue) === 0){
            return value.substring(metaValue.length, value.length);
        }
    }
    return null;
}

//функция удаления данных
function deleteData(){
    setCookie('team', null, -10);
    setCookie('money', null, -10);
    setCookie('damage', null, -10);
    setCookie('armor', null, -10);
    setCookie('attackSpeed', null, -10);
}

//улучшенная логика рандома (min и max включаются, не может больше max)
function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//для меню, обновление интерфейса у характеристик
function interfaceUpdate(){
    moneyText.innerHTML = 'Монеты: ' + money;
    stats.forEach(function(stat){
        if(stat.classList.contains('damage-container')){
            stat.innerHTML = 'Урон: ' + damage;
        }
        if(stat.classList.contains('armor-container')){
            stat.innerHTML = 'Защита: ' + armor;
        }
        if(stat.classList.contains('attack_speed-container')){
            stat.innerHTML = 'Скорость аттаки: ' + attackSpeed;
        }
    })
}