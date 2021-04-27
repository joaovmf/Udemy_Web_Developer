const pilotos = ['vetel', 'alonso','raikonnen','massa']
pilotos.pop() //remove o ultimo elemento do array 
console.log (pilotos)

pilotos.push ('Verstappen') //adiciona um ultimo elemento no array
console.log (pilotos)

pilotos.shift() // remove o Primeiro elemento 
console.log (pilotos)

pilotos.unshift('hamilton') //adiciona o primeiro elemento 
console.log (pilotos)

//splice pode tanto excluir quanto adicionar elementos 

//adicionar 
pilotos.splice(2,0, 'bottas', 'massa') //lê-se: no indice 2, não vou retirar elementos, mas vou adicionar ''
console.log (pilotos)

// remover
pilotos.splice (3,1) //lê-se: no indice 3, vou retirar 1 elemento
console.log (pilotos)

//metodo slice abaixo. Transforma seu array em um novo array (dois arrays) a partir do numero que você indicar. 

const algunspilotos1 = pilotos.slice(2) //novo array SLICE E SPLICE SÃO DIFERENTES. 
console.log (algunspilotos1)

const algunspilotos2 = pilotos.slice(1,4)    
console.log (algunspilotos2)