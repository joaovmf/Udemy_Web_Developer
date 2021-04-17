const prod1 = {}
//se fosse um par de cochetes seria um array.  Como é um par de chaves, é considero um object. 
// o objeto será uma conjunção de chaves e valores. 
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.00
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço. 

console.log (prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90

}

'{"nome": "Camisa Polo", "preco": 79.90}' //isso é um JSON (JavaScript Object Notation), é um formato textual de um objeto.

console.log (prod2)
