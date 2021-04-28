const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2} 
]

//imperativa (é mais literal, utiliza diretamente for e metodos imperativos e calcula tudo de uma vez só)
let total1 = 0 
for (let i = 0 ; i < alunos.length ; i++) {
    total1 += alunos[i].nota
}

console.log (total1 / alunos.length)

//declarativo (declativo é menos literal, faz operação passo a passo e utiliza funções pré prontas)
 const getnota = aluno => aluno.nota
 const soma = (total,atual) => total + atual 
 const total2 = alunos.map(getnota).reduce(soma)
 console.log(total2 / alunos.length)