const carrinho = [
    '{ "nome": "borracha" , "preço" : 3.45 }',
    '{ "nome": "caderno" , "preço" : 13.90 }',
    '{ "nome": "kit de lapis" , "preço" : 41.22 }',
    '{ "nome": "caneta" , "preço" : 7.50 }',
]



const paraobjeto = json => JSON.parse(json)
const apenaspreco = produto => produto.preço

const resultado = carrinho.map(paraobjeto).map(apenaspreco)

console.log (resultado)