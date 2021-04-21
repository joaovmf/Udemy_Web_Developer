const notas = [6.7, 7.4, 9.8, 8.1,7.7,3.2,4.3]

//sem callback 

const notasbaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasbaixas1.push(notas[i])
    }
}

console.log (notasbaixas1)

//meu jeito sem callback muito melhor que o do prof 
/*
for (let i = 0; i < notas.length; i++){
    if (notas [i] < 7){
    console.log ('nota ', i, ' = ', notas [i])
}
}
*/

// Com callback 
//funcao normal 
const notasbaixas2 = notas.filter(function (nota) {
    return nota < 7 
})
console.log(notasbaixas2)

//funcao arrow
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log (notasbaixas3)




