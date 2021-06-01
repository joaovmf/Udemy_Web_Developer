const produto = [{ id: 1, nome: 'tv',preco: 2000, marca: 'lg'} , { id: 2, nome: 'celular', preco: 3000, marca: 'apple'} ]

const barato = produto => produto.preco <= 2900
console.log (produto.filter(barato))

function operacoes (a,b) {
    console.log (a + b,  a - b,  a * b ,a / b)
}

operacoes(10,2)

function triangle (l1,l2,l3) {

    if (l1 == l2 && l2 == l3 ) {
        console.log ('Esse triangulo é equilátero')
    } else if (l1 != l2 && l2 != l3 && l1!= l3){
        console.log('Esse triangulo é escaleno')
    } else {
        console.log ('Esse triangulo é isósceles')
    }
}
triangle (1,2,3)

function formata (valordecimal) {
    let valorEmReais = `R$ ${valordecimal.toFixed(2).toString().replace(".",",")}`
    console.log (valorEmReais)
}

formata(0.1 + 0.2)

function jurosSimples (ci, tj, ta) {
    console.log (ci + (ci * tj * ta))
}

jurosSimples (100,0.1,2)

function dia (numero) {
    switch (numero) {
        case 1: return 'Fim de semana'
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
        case 7: return 'Fim de semana'
        default: return 'Dia inválido'
    }
}

console.log (dia(1))
console.log (dia(2))
console.log (dia(8))

class avo {
    constructor (nome) {
        this.nome = nome
    }
}

class pai extends avo {
    constructor (nome, idade) {
        super(nome)
        this.idade = idade
    }
}

class Filho extends pai {
    constructor (nome, idade, profissao) {
        super(nome, idade)
        this.profissao = profissao 
    }
}

const filho = new Filho 
filho.nome = 'João'
filho.idade = 25
filho.profissao = 'Dev'
console.log (filho)

const filho2 = new Filho 
filho2.nome = 'Luana'
filho2.idade = 26
filho2.profissao = 'Dev'
console.log (filho2)
