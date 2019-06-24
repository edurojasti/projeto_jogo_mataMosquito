//Aqui será implementado a lógica principal do game
var alturaJanela = 0
var larguraJanela = 0
var vidas = 1
var tempo = 31
var vidas = 1
var nivel = window.location.search
nivel = nivel.replace('?', '')
var tempoMOSCA = 2000
if(nivel === 'facil'){
    //tempo para criar a mosca 1500 ms
    tempoMOSCA = 2000
}else if(nivel === 'medio'){
    //tempo para criar a mosca 1500 ms
    tempoMOSCA = 1000
}else if(nivel === 'dificil'){
    //tempo para criar a mosca 1500 ms
    tempoMOSCA = 800
}

//dimensão da tela do Jogo, a função sera chamada no evento Onresize da tela no game.html
function telaJogo(){
    //recuperando os valores da dimensão tela
    larguraJanela = window.innerWidth
    alturaJanela = window.innerHeight
    console.log(`LARGURA: ${larguraJanela}, ALTURA: ${alturaJanela}`)
}

function criarMosca(){
    telaJogo()
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
        document.getElementById('vida_0'+vidas).src = 'img/coracao_vazio.png'   
        vidas++
    }
    if(vidas > 3 ){
        window.location.href='game_over.html'
    }

    //posica Aleatórias
        var posLarg = Math.floor(Math.random() * larguraJanela) - 90
        var posAlt = Math.floor(Math.random() * alturaJanela) - 90
        posLarg = posLarg < 0 ? 0 : posLarg
        posAlt = posAlt < 0 ? 0 : posAlt
        console.log(posLarg, posAlt)
    
    //classes de tamanho
        var tamanho = Math.floor(Math.random() * 3) + 1
        console.log(tamanho)

    //classes lado 1 e 2
        var lado = Math.floor(Math.random() * 2) + 1

    //criandao o elemento mosca
        var mosca = document.createElement('img')
        mosca.src = "img/mosquito.png"
        mosca.className = `mosca${tamanho} lado${lado}`
        mosca.style.position = "absolute"
        mosca.style.top = posAlt + 'px'
        mosca.style.left = posLarg + 'px'
        mosca.id = "mosca"
        mosca.onclick = function(){
            this.remove()
        }
        document.body.appendChild(mosca)
}

function cronometro(){
    setInterval(() => {
        tempo--
        if(tempo < 0){
            window.location.href = 'venceu.html'
            tempo = 0
        }
        var crono = document.getElementById('tempoo')
        crono.innerHTML = tempo
    }, 1000);
}

cronometro()

setInterval(() => {
    criarMosca()
    console.log(tempoMOSCA)
}, tempoMOSCA);