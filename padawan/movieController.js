//const name = "boy doido"

//function printName(){
//    console.log(`Função está no variables.js, ${name}`)
//}

//function printDate() {
//    console.log(new Date())
//}

//module.exports = { printName, printDate, name }

const filmes = [{nome: 'nova esperança', id: 1}, {nome: 'Imperio contra ataca' , id: 2}]

function mostrarFilme (filme) {
    console.log (filme.nome)
}

const exportar = {
    filmes, mostrarFilme
}

module.exports = exportar