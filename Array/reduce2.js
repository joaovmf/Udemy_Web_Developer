const alunos = [{nome: 'joão', nota: 7.3, bolsista: false},
{nome: 'maria', nota: 9.2, bolsista: true},
{nome: 'pedro', nota: 9.8, bolsista: false},
{nome: 'ana', nota: 8.7, bolsista: true}]

//Desafio: todos os alunos são bolsistas? 
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
console.log (alunos.map(a => a.bolsista).reduce(todosbolsistas))

//Desafio: algum aluno é bolsista?
const algumbolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map (a=> a.bolsista).reduce(algumbolsista))