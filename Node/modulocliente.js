//sempre que utilizar a palavra cliente no arquivo/modulo vou passar outros modulos para esse modulo. 

const moduloA = require ('./moduloA') // ponto barra porque estou representando um modulo dentro do meu sistema.    
const moduloB = require ('./moduloB')

console.log (moduloA.ola)
console.log (moduloA.bemVindo)
console.log (moduloA.ateLogo)
console.log (moduloA)

console.log (moduloB.bomdia)
console.log (moduloB.boanoite())
console.log (moduloB)