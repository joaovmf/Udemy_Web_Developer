const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log (Object.keys(pessoa)) //pega as chaves do objeto. 
console.log (Object.values(pessoa)) //pega os valores do objeto. 
console.log (Object.entries(pessoa)) //cria um array
Object.entries(pessoa).forEach(([chave,valor]) => { //percorre o array
    console.log (`${chave}: ${valor}`) //atributo 1 e 2 
})

Object.defineProperty(pessoa, 'datanascimento' , { //defino as propriedades de um objeto e posso dizer se posso enumera-lo, muda-lo e atribuir valor a ele.
    enumerable: true,
    writable: false, 
    value: '01/01/2019'
})

pessoa.datanascimento = '01/01/2017' // vai continuar a data anterior pq coloquei no 'writable' que não posso atribuir novo valor. 
console.log (pessoa.datanascimento)
console.log (Object.keys(pessoa)) //adicionou data de nascimento pq coloquei true no enumerable. 

//object.assign (ECMAscript 2015)
const dest = {a: 1}
const o1 = {b : 2}
const o2 = {c:3 , a: 4}
const obj = Object.assign(dest, o1, o2) //todos os objetos após do primeiro vão ser adicionados/concatenados ao primeiro.   
console.log (obj)

Object.freeze(obj)
obj.c = 1234
console.log (obj)