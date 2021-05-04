// novidades ECMASCRIPT 15,16,17

//let e const 
//let possui escopo de bloco e só pode ser acessado naquele bloco. VAR pode ser acessado fora do bloco. 
{
    var a = 1
    let b = 2
    
}

console.log (a)
//console.log (b)

//Template String 
const produto = 'Ipad'
console.log (`${produto} é caro`) //posso quebrar linha e ele quebrará. Na string normal não tem quebra de linha.

//Destructuring

const [l,e,...tras] = "Cod3r"
console.log (l,e,tras)

const [x, ,y] = [1,2,3]
console.log (x, y)

const { idade : i, nome: n } = { nome: 'Ana', idade: 9}
console.log (i,n)

