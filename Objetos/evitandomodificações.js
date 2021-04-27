//Object.preventExtensions 
const produto = Object.preventExtensions ({ //não posso mais adicionar atributos no objeto, mas posso excluir ou modifica-los.
    nome: 'Qualquer', preco: 1.99, tag:'promoção'
})

console.log ('Extensível: ', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.desconto = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'juliana', idade: 35 }
Object.seal(pessoa) //você não consegue adicionar atributos, excluir atributos, mas consegue modificar os valores dos atributos. 
console.log ('selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log (pessoa)

//Object.freeze = selado + valores constantes. Ou seja, não consegue fazer nada. Liberdade 0. 

const pessoa1 = { nome: 'juliana', idade: 35 }
Object.freeze(pessoa1) 
console.log ('congelado: ', Object.isFrozen(pessoa1))

pessoa1.sobrenome = 'silva'
delete pessoa1.nome
pessoa1.idade = 29
console.log (pessoa1)
