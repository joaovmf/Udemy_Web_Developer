function soma () {
    let soma = 0 
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

//arguments é um objeto semelhante a um Array acessível dentro de funções que contém 
//os valores dos argumentos passados ​​para aquela função.

console.log (soma())
console.log (soma(1))
console.log (soma(45,55,33,23,254))
console.log (soma (1.1,2.2,3.3))
console.log (soma (1.1,2.2, " Teste"))
console.log (soma('a','b','c'))     
