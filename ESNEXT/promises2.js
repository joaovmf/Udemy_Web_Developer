//comparando promises com calback 
//abaixo tem callback dentro de outra callback

setTimeout (function (){ 
    console.log('Executando callback...')

    setTimeout(function (){
        console.log ('Executando callback ...')
    }, 2000)

    setTimeout (function (){
        console.log ('Executando callback ...')
    }, 2000)

}, 2000)

//fazendo abaixo com promises 

function esperarpor(tempo = 2000) {
    return new Promise (function(resolve) {
        setTimeout (function() {
            console.log ('Executando promisse...')
            resolve('Vishhhh')
        }, tempo)
    })
}

esperarpor(3000).then(texto => console.log (texto))

esperarpor()
    .then (() => esperarpor())
    .then (esperarpor)