const contadorA = require ('./instanciaunica')
const contadorB = require ('./instanciaunica')

const contadorC = require ('./instancianova')() //estou invocando a função factory ()

const contadorD = require ('./instancianova')()

contadorA.inc()
contadorA.inc()
console.log (contadorA.valor, contadorB.valor) //node faz cache na importacao de objetos, ou seja, incremetou A e B mesmo eu só incrementando A. 

contadorC.inc()
contadorC.inc()
console.log (contadorC.valor, contadorD.valor) // cache não foi feito pois utilizei uma função factory para incrementar apenas C e deixar D independente. 


 