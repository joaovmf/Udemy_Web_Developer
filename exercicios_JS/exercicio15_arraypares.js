function array (numeros) {
    let resultado = []
    for (let i = 0 ; i < numeros.length ; i++) {
        const par = numeros [i] % 2 ==0
        if (par){
            resultado.push(numeros[i])  
         }
    }
    return resultado
}

console.log (array([1,2,3,4]))