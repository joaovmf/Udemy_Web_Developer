const escola = [{
    nome: 'turma M1', 
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.3
    }]
}, { 
    nome: 'Turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome:'roberto',
        nota: 7.3
    }]
}]

const getnotaaluno = aluno => aluno.nota
const getnotaturma = turma => turma.alunos.map(getnotaaluno)

const notas1 = escola.map(getnotaturma)

console.log(notas1)

console.log ([].concat([8.1,9.3], [8.9, 7.3]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getnotaturma)
console.log (notas2)