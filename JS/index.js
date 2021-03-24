let height = 0;
let width = 0;
let life = 1;
let time = 10;
let timeOut = 1500;

let gameLevel = window.location.search.replace('?', '');

const sizeScreen = function () {
    height = window.innerHeight;
    width = window.innerWidth;

};

window.addEventListener('resize', sizeScreen)

sizeScreen()


if(gameLevel === 'fraco'){
    timeOut = 1500;
    time = 30;
}else if(gameLevel === 'mito'){
    timeOut = 1000;
    time = 40;
}else{
    timeOut = 750;
    time = 60;
}
    
let chronometer = setInterval(() => {
    time -= 1;

    if(time < 0 ){
        clearInterval(chronometer);
        clearInterval(startFly);
        window.location.href = 'victory.html';
    }else{
        document.getElementById('chronometer').innerHTML = time;
    }
}, 1000);   


const flyPosition = function (){

    const flyID = document.querySelector('#fly');

    if(flyID){
        flyID.remove();

        if(life > 3){
            window.location.href = 'game_over.html';
        }else{
            document.querySelector('.life' + life).src = './img/coracao_vazio.png'
            life++;
        }
    }

    //Posição cartesina
    let positionX = Math.floor(Math.random() * width) - 90;
    let positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    //Cria HTML
    const imgFly = document.createElement('img');
    imgFly.src = './img/mosca.png';
    document.body.appendChild(imgFly);

    //Propriedades mosquito
    imgFly.className = flySize() + ' ' + flySide();
    imgFly.id = 'fly'
    imgFly.style.position = 'absolute';
    imgFly.style.top = positionY + 'px';
    imgFly.style.left = positionX + 'px';

    imgFly.addEventListener('click', (event) => {
        event.target.remove();
    });

}

const flySize = function (){

    let typeFly = Math.floor(Math.random() * 3);

    switch (typeFly) {
        case 0:
             return 'flySmall';

        case 1:
            return 'flyMedium';
        
        case 2: 
            return 'flyBig';      
    }
}

const flySide = function (){

    let sideFly = Math.floor(Math.random() * 2);

    switch (sideFly) {
        case 0:
            return 'flySideA';

        case 1:
            return 'flySideB';    
    }
}