function getpreco (imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook', 
    preco: 4589,
    desc: 0.15,
    getpreco
}

console.log (produto.getpreco())

const carro = {preco: 49990, desc: 0.20 }

console.log (getpreco.call(carro))
console.log (getpreco.apply(carro))

console.log (getpreco.call(carro, 0.17, '$'))
console.log (getpreco.apply(carro, [0.17, '$']))

//a diferença entre o call e o apply é apenas a passagem dos parâmetros. 
// os parametros do apply precisam estar dentro de um array. Do call não. 