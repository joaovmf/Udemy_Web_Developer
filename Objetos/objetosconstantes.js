// pessoa -> 123 -> {...}
const pessoa = { nome: 'joão'}
pessoa.nome = 'pedro'
console.log (pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log (pessoa.nome)
console.log (pessoa)

const pessoaConstante = Object.freeze ({nome: 'joao'})
pessoaConstante.nome = 'maria'
console.log (pessoaConstante)