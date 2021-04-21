var obj = { 
    nome: 'joão',
    idade: 25,
    profissão: 'advogado',
    função: function () {
       console.log (this.nome + this.idade + this.profissão)
    }
}

obj.função ()

