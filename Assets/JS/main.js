var altura;
var largura;
var vidas = 1;
var temp = 61;
var CriaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel ==='normal'){
    CriaMoscaTempo = 1500
}else if ( nivel === 'dificil'){
    CriaMoscaTempo = 1000
}else if (nivel === 'Chuck Noir'){
    CriaMoscaTempo = 750
}

function AjustarTamanho (){
     altura = window.innerHeight;
     largura = innerWidth;
     console.log(largura, altura);
}


var crono = setInterval(() => {
    temp -=1
    if(temp < 0){
        clearInterval(crono)
        clearInterval(CriaMosca)
        window.location.href = 'vitoria'
    }else{
         document.getElementById('cronometro').innerHTML = temp
}
}, 1000);


function Posicao(){

    AjustarTamanho()
    // remover caso exista
    if (document.getElementById ('mosca')){
        document.getElementById ('mosca').remove()

            if (vidas > 3){
                    window.location.href = 'fim_de_jogo'
            }else{
                document.getElementById('vida' + vidas).src="/Assets/imagens/coracao_vazio.png"
                vidas++
            }
    }

    var positionX = Math.floor(Math.random() * largura) - 90;
    var positionY = Math.floor(Math.random() * altura) - 90;

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    
    console.log(positionX, positionY)


    //criar um elemento HTML

    var mosquito1 = document.createElement('img')
    mosquito1.src ='/Assets/imagens/mosca.png';
    mosquito1.className = AjustarTamanhoMosquito () + ' ' + ladoAleatorio()
    mosquito1.style.left = positionX + 'px';
    mosquito1.style.top = positionY + 'px';
    mosquito1.style.position = 'absolute'
    mosquito1.id = 'mosca'
    mosquito1.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito1);
}

function AjustarTamanhoMosquito (){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
    switch (classe){
        case 0:
            return 'ajustarMosquito1';
        case 1:
            return 'ajustarMosquito2';
        case 2:
            return 'ajustarMosquito3';
    }

}

function ladoAleatorio (){
    var lado = Math.floor(Math.random() * 2)
    console.log(lado)
    switch (lado){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
       
    }
}