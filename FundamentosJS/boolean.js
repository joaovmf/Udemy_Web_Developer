let isAtivo = false 
console.log (isAtivo)

isAtivo = true 
console.log (isAtivo)

isAtivo = 1 
console.log (!isAtivo)
//ou 
console.log (!!isAtivo)
//Exclamação significa não! Na primeira temos uma negacao que a variável é 1. 
// Na segunda temos duas negacoes que a variável é 1, tornando entao um sim. 

console.log ('os verdadeiros...')
console.log (!!3)
console.log (!!' ')
console.log (!! [])
console.log (!! {})
console.log (!!Infinity)
console.log (!!(isAtivo = true))

console.log ('os falsos...')
console.log (!!0)
console.log (!!' ')
console.log (!!null)
console.log (!!NaN) //not a number
console.log (!!undefined)
console.log (!!(isAtivo = false))

console.log ('pra finalizar...')
console.log (!!('' || null || 0 || ''))

let nome = ''
console.log (nome || 'desconhecido')
