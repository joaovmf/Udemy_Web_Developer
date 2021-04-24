//coleção dinâmica de pares/valor 
const produto = new Object 

produto.nome = 'cadeira'
produto ['marca do produto'] = 'generica' // forma não muito usada de atribuir caracteristicas a um objeto. 
produto.preco = 220

console.log (produto)
delete produto.preco 
delete produto ['marca do produto']
console.log (produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: { 
            logradouro: 'rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome:'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    valorseguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000

carro ['proprietario']['endereco']['logradouro'] = 'Av. gigante.'
console.log (carro)

delete carro.condutores 
delete carro.proprietario.endereco
delete carro.valorseguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
