class pessoa { //nada mais é do que uma função escrita de forma diferente 
    constructor (nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }


falar () {
    console.log ('meu nome é', this.nome + this.sobrenome)
    }
}

const p1 = new pessoa ('joão', ' victor')
p1.falar ()

const criarpessoa = nome => {
     return {
         falar: () => console.log (`meu nome é' ${nome}`) // só funciona com template strings
     }
}

const p2 = criarpessoa ('joão')
p2.falar ()