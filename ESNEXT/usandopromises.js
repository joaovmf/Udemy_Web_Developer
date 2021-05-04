// com promise 
const http = require ('http')

const getturma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve , reject) => {
        http.get (url, res => {
            let resultado = ''
    
            res.on('data' , dados =>{
                resultado += dados
            })

            res.on('end' , () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}   


Promise.all([getturma ('A'), getturma ('B'), getturma ('C')])
    .then (turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log (e.message))

    getturma ('D').catch(e => console.log (e.message))