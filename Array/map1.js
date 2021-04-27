const nums = [1,2,3,4,5]

// for com propósito: 

let resultado = nums.map(function (e) {
    return e * 2 //posso multiplicar por quanto eu quiser ou fazer a operação q eu quiser. 
})

console.log (resultado) //gera novo array, se eu chamar o array anterior ela mantém 

const soma10 = e => e + 10 
const triplo = e => e * 3 
const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` // to fixed coloca duas casas decimais e o replace substitui por . e ,

resultado = nums.map (soma10) .map(triplo).map(paradinheiro)
console.log (resultado)

//OU SEJA, POSSO FAZER A OPERAÇÃO QUE EU QUISER COM O ARRAY, ATÉ CRIAR FUNÇÕES E CHAMAR ELAS DENTRO DO MAP QUANTAS VEZES EU QUISER.