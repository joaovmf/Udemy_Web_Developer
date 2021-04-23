function frutas(carro) {
    switch (carro) {
        case 'hatch':
            return "compra efetuada com sucesso"
        case 'sedan':
            return "Tem certeza que não prefere esse modelo?"
        case 'moto':
            return "Tem certeza que não prefere esse modelo?"
        case 'caminhonete':
            return "Tem certeza que não prefere esse modelo?"
        default: 
            return "Não trabalhamos com esse tipo de automovel"
    }
}

console.log (frutas('hatch'))
console.log (frutas('sedan'))
console.log (frutas('moto'))
console.log (frutas('caminhonete'))
console.log (frutas('bug'))