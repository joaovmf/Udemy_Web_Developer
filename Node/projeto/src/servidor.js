//cada processo que precisar se comunicar com a rede precisa de uma porta e essa porta é unica para cada processo.
//Ou seja, a porta nada mais é que a ponte de comunicação entre o servidor local e a internet. 
const porta = 3003

const express = require ('express')
const app = express ()  
const bodyparser = require ('body-parser')
const bancodedados = require ('./bancodedados')

app.use(bodyparser.urlencoded({ extended : true}))

app.get('/produtos', (req,res, next) => { //requisição, respostas, next
    res.send(bancodedados.getprodutos())
})

app.get('/produtos/:id' , (req, res, next) => {
    res.send(bancodedados.getprodutos(req.params.id))
})

app.post('/produtos', (req,res,next) => {
    const produto = bancodedados.salvarproduto({
        nome: req.body.nome,
        preço: req.body.preco
    })
    res.send (produto) //JSON
})

app.put('/produtos/:id', (req,res,next) => {
    const produto = bancodedados.salvarproduto({
        id: req.params.id,
        nome: req.body.nome,
        preço: req.body.preco
    })
    res.send (produto) //JSON
})

app.delete('/produtos/:id', (req,res,next) => {
    const produto = bancodedados.excluirproduto(req.params.id)
    res.send (produto) //JSON
})

app.listen (porta, () => {
    console.log ('Servidor está executando na porta ', porta)
})

