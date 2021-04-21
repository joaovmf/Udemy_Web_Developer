const fabricantes = ['mercedes','audi','bmw']

function imprimir (nome, indice) {
    console.log (`${indice + 1}. ${nome}`) //utilizando template strings
}

fabricantes.forEach (imprimir) //forEach é uma função do array. Passa como paramêtro o nome do elemento que ele tá percorrendo.

const fabricantes2 = ['mercedes','audi','bmw']

function imprimir2 (nome, indice) {
    console.log (indice + 1 + '. ' + nome) //sem utilizar template strings
}

fabricantes2.forEach (imprimir2)

fabricantes2.forEach (function (fabricante){ //utilizando function normal
    console.log (fabricante )
})

fabricantes2.forEach (fabricante => console.log (fabricante)) //utilizando arrow function 

//callbacks são funções que podem ser usadas para percorrer todos os elementos do array