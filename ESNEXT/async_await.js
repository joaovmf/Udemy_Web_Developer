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

//recurso do ES8 
    //objetivo de simplificar o uso de promises.. 
    let obteralunos = async () => {
        const ta = await getturma('A')
        const tb = await getturma ('B')
        const tc = await getturma ('C')
        return [].concat(ta,tb,tc)
    } //retorna um objeto asyncFunction 

    obteralunos ()
        .then(alunos => alunos.map(a =>a.nome))
        .then(nomes => console.log(nomes))