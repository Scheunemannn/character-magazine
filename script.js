let botaodiminui = document.getElementById('botaodiminui')

let botaoaumenta = document.getElementById('botaoaumenta')

let number = Math.floor(0)

let texto = document.getElementById('texto')

const verifica = () => {
    if (number == 0) {
        texto.innerHTML= 'Mia nasceu no sul do continente, em uma vila chamada Bombinhas, localizada em uma península protegida por uma cadeia montanhosa que dificultava o acesso ao local. Por conta disso, o povo de Bombinhas desenvolveu uma cultura única. <br> <br> Em um dia de tempestade, a vila foi atacada por invasores, que destruiram e saquearam tudo. Alguns moradores conseguiram escapar por uma antiga passagem secreta através da montanha. Contudo, a maior parte do povo não conseguiu escapar a tempo..'
    }
    else if (number == 1) {
        texto.innerHTML='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam magni aperiam aut sint, aliquid voluptatem perferendis possimus recusandae atque soluta, earum dolore, est sequi obcaecati reprehenderit quaerat maxime repudiandae tenetur eaque alias! Suscipit veritatis hic sequi voluptate quibusdam corrupti tempore laborum reiciendis incidunt dolor repellendus minus, odit, doloremque eaque consectetur!'
    }
}

const aumenta = () => {
    number++
    console.log(number)
    if (number =>1){
        number = 1
    }
    verifica()
    
}

const diminui = () => {
    number--
    console.log(number)
    if (number <= 0) {
        number = 0
    }
    verifica()
}

