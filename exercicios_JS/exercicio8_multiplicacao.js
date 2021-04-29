mult = (n1,n2) => n1 * n2

console.log (mult(3,3))

//usar sem utilizar o sinal da multiplicação 

function multiplicar (n1,n2) {
    let resultado = 0 
    for (let i = 0 ; i < n2 ; i++){
        resultado += n1 
    }
    return resultado
}

console.log (multiplicar(3,3))

