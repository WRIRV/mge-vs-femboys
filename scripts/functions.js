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
}

//улучшенная логика рандома (min и max включаются, не может больше max)
function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}