function esperarpor(tempo = 2000) {
    return new Promise (function(resolve) {
        setTimeout (function() {
            console.log ('Executando promisse...')
            resolve('Vishhhh')
        }, tempo)
    })
}

esperarpor(2000)
    .then(() => console.log ('Executando promisse 1...'))
    .then(() => console.log ('Executando promisse 2...'))
    .then(() => console.log ('Executando promisse 3...'))

    function retornarvalor () {
        return new Promise (resolve => {
            setTimeout(()=> resolve(10), 5000)
        })
    }

    async function executar () {

      let valor = await  retornarvalor()

        await esperarpor(1000)
        console.log(`Async/Await ${valor}`)

        await esperarpor(1000)
        console.log(`Async/Await ${valor + 1}`)

        await esperarpor(1000)
        console.log(`Async/Await ${valor + 2}`)
    }

    executar()

    //o await vem de esperar. Apesar de ser uma função assincrona, ele faz parecer sincrona pois espera
    // para mostrar o valor no console. 