// arrow function (são sempre anônimas)

const soma = (a,b) => a + b 
console.log (soma (1,2))

const soma2 = (a,b) => {
   return a + b //se coloco um bloco, tenho que usar return 
} 

console.log (soma2 (1,2))

//arrow function (this)
const lexico1 = () => console.log (this === exports)
const lexico2 = lexico1.bind({})
lexico1 ()
lexico2 ()

//parametro default 
function log (texto = 'node') {
    console.log (texto)
}

log ()
log ('sou mais forte')

//operador rest (agrupa)
function total (...numeros) {
    let total = 0 
    numeros.forEach (n => total += n)
    return total
}

console.log (total(2,3,4,5))

