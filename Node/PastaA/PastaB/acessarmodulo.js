const moduloA = require ('../../moduloA') //dois pontos porque sai da pasta b, pasta a até a pasta node. 
console.log (moduloA.ola)

const saudacao = require ('saudacao') //criei uma pasta dentro de modules chamada saudacao com um arquivo index.js que posso encontrar fazendo o requerimento em qualquer modulo.
console.log (saudacao.ola) 

const c = require ('./PastaC')
console.log (c.ola2)

const http = require ('http') //não preciso informar caminho pois já faz parte do modulo js 
http.createServer((req,res) => {
    res.write ('Bom dia')
    res.end()
}).listen(8080) 