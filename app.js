const body = document.querySelector('body');

function getDropRandomWidth(){
    const width = Math.random() * (0.3 - 0.2) + 0.2;
    return width + 'vw';
}

function getDropRandomHeight(){
    const height = Math.floor(Math.random() * (15 - 5)) + 5;
    return height + 'vh';
}

function getDropRandomX(){
    const x = Math.floor(Math.random() * (80 - (-50))) + (-50);
    return x + 'vw';
}

function getDropRandomY(){
    const y = Math.floor(Math.random() * (1500 - 50)) + 50;
    return `-${y}vh`
}

function getNewDrop(){
    const drop = document.createElement('div');
          drop.id = 'drop';
    return drop;
}

function startFall(drop){
    drop.style.top = '200vh';
}

function makeDrop(){
    for( let i = 0; i < 30; i++ ){
        let drop = getNewDrop();
        let dropSettings = {
            width : getDropRandomWidth(),
            height : getDropRandomHeight(),
            x : getDropRandomX(),
            y : getDropRandomY()
        }
    
        drop.style.width  = dropSettings.width;
        drop.style.height = dropSettings.height;
        drop.style.left   = dropSettings.x;
        drop.style.top   = dropSettings.y;
    
        body.appendChild(drop)
        setTimeout(() =>{
            startFall(drop)
            setTimeout(() => {
                drop.remove()
            }, 3500)
        }, 50)
    }
}


window.addEventListener('click', () =>{    
    function drop(){
        makeDrop()
    }
    setInterval(() => {
        drop()
    }, 500);
}) 