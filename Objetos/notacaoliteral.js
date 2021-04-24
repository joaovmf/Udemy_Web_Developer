//aula meio sem nexo de mudanças da forma antiga para nova forma. 

const a = 1 
const b = 2 
const c = 3 

const obj1 = {a: a, b: b, c: c} //forma antiga de se atribuir objetos, antes do ecmascript 2016.
const obj2 = {a,b,c}
console.log (obj1, obj2)

const nomeatr = 'nota'
const valoratr = 7.87

const obj3 = {}
obj3[nomeatr] = valoratr
console.log(obj3)

const obj4 = {[nomeatr]: valoratr}
console.log (obj4)

const obj5 = {
    funcao1: function () {
        //...
    },  
    funcao2() {
        //...
    }
}

console.log (obj5)
