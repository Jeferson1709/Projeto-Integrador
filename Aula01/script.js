const personagem = document.getElementById("personagem");

let posX = 0;
let posY = 0;

const passo = 5;

document.addEventListener("keydown", (e)=>{

    switch(e.key){
        
        case "ArrowDown":
            if (posY < 370) {
            posY+= passo;
            personagem.style.top = posY  + 'px';
            personagem.style.backgroundPosition = '0px 0px';
        }
    break;
 case "ArrowUp":
    if(posY > 0){
        posY -= passo;
        personagem.style.top = posY  + 'px';
        personagem.style.backgroundPosition = '0px 0px';
    }
    break;

 case "ArrowRight":
        if(posX < 568){

            posX += passo;
            personagem.style.left = posX  + 'px';
            personagem.style.backgroundPosition = '0px 0px';
        }
    break;
    
 case "ArrowLeft":
    if (posX > 0) {
        
        posX -= passo;
        personagem.style.left = posX  + 'px';
        personagem.style.backgroundPosition = '0px 0px';
    }
    break;
    }

});