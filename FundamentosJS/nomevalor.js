const saudacao = 'Opa' //contexto léxico 1 

function exec () {
    const saudacao = 'Falaaa' //contexto léxico 2 
    return saudacao 
}

//Objeto são grupos aninhandos de nome/valor. Se eu colocar console.log em cada, irá mostrar o valor de cada corretamente, pois são contextos léxicos diferentes. 

const cliente = { 
        nome: 'Pedro',
        idade: 32,
        peso: 90,
        endereco: {
            logradouro: 'Rua Muito Legal',
            numero: 123
        }
}

console.log (saudacao)
console.log (exec())
console.log (cliente)