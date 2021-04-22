function pessoa (nome) {
    this.nome = nome 
    
    this.falar = function (){
    return console.log (`meu nome é ${this.nome}`)
    }
}

var p1 = new pessoa ('joão')

p1.falar ()




