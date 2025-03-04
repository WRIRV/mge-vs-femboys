let team = null;

const bg = document.querySelector('.background');
const fmbButton = document.querySelector('.femboy-button');
const mgeButton = document.querySelector('.mge-button');

const acceptText = document.querySelector('.accept-text');
const fmbAccept = document.querySelector('.femboy-accept');
const mgeAccept = document.querySelector('.mge-accept');

fmbButton.addEventListener('click', function(){
    if(team === 0){
        setCookie('team', team, 999); //0 - фембои
        window.location.href = 'index.html';
    }
    fmbButton.classList.add('femboy-button-enabled');
    mgeButton.classList.remove('mge-button-enabled');

    fmbAccept.classList.add('femboy-transition');
    mgeAccept.classList.remove('mge-transition');

    if(team === null){
        bg.classList.add('animated-femboy');
        bg.classList.remove('animated-mge');
    }else if(team === 1){
        bg.classList.add('animated-mge-femboy');
        bg.classList.remove('animated-mge');
        bg.classList.remove('animated-femboy');
        bg.classList.remove('animated-femboy-mge');
    }

    acceptText.style.opacity = 1;
    team = 0;
});

mgeButton.addEventListener('click', function(){
    if(team === 1){
        setCookie('team', team, 999); //1 - мге братья
        window.location.href = 'index.html';
    }
    mgeButton.classList.add('mge-button-enabled');
    fmbButton.classList.remove('femboy-button-enabled');

    mgeAccept.classList.add('mge-transition');
    fmbAccept.classList.remove('femboy-transition');

    if(team === null){
        bg.classList.add('animated-mge');
        bg.classList.remove('animated-femboy');
    }else if(team === 0){
        bg.classList.add('animated-femboy-mge');
        bg.classList.remove('animated-mge-femboy');
        bg.classList.remove('animated-mge');
        bg.classList.remove('animated-femboy');
    }

    acceptText.style.opacity = 1;
    team = 1;
});