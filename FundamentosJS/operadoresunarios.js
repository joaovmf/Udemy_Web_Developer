let num1 = 1 
let num2 = 2 

num1++
console.log (num1)
--num1
console.log (num1)

console.log (++num1 === num2--) //da verdadeiro por conta da ordem de precedencia. Primeiro encrementou, depois comparou e por ultimo que mudou o valor.
console.log (num1 === num2) //pode-se ver que depois da linha 9 possuem valores diferentes. 