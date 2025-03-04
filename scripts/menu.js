
document.addEventListener('DOMContentLoaded', function(){
    let team = parseInt(getCookie('team'));
    //проверка на выбор команды
    if(getCookie('team') === null){
        window.location.href = 'choice.html';
    }

    //выбор команды
    const teamText = document.querySelector('.team-desc');
    if(team === 0){
         teamText.innerHTML += ' ' + teamText.dataset.c0;
    }else if(team === 1){
        teamText.innerHTML += ' ' + teamText.dataset.c1;
    }

    //кнопки
    const resetButton = document.querySelector('.reset-button');
    const playButton = document.querySelector('.play-button');

    resetButton.addEventListener('click', function(){
    deleteData();
    location.reload();
    });

    playButton.addEventListener('click', function(){
        window.location.href = 'fight.html';
    });
});