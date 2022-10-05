const body = document.querySelector('body');

function startFall(drop){
    drop.style.top = '200vh';
}

function makeDrop(){
    for( let i = 0; i < 30; i++ ){
        let drop = new Drop();
        let dropSettings = {
            width : drop.width(),
            height : drop.height(),
            x : drop.x(),
            y : drop.y()
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
        }, 1000)
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