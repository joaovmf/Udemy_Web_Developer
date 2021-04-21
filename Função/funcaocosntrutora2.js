function pessoa (nome,idade,profissão) {
    this.nome = nome
    this.idade = idade
    this.profissão = profissão
}

var pessoa1 = new pessoa ('João', 25, 'advogado')

console.log (pessoa1)
console.log (pessoa1.nome + ', ' + pessoa1.idade + ' anos, ' + pessoa1.profissão) //mais organizado

var pessoa2 = new pessoa ('Luana', 26, 'Interprete de Libras')

console.log (pessoa2)
console.log (pessoa2.nome + ', ' + pessoa2.idade + ' anos, ' + pessoa2.profissão) //mais organizado
