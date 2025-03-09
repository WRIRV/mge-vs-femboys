document.addEventListener('DOMContentLoaded', function(){
    //проверка на выбор команды
    if(getCookie('team') === null){
        window.location.href = 'choice.html';
    }
});