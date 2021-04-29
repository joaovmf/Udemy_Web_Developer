function menor (vetor) {
    let menor = vetor[0]
    for (let i = 0 ; i < vetor.length ; i++){
        if (vetor [i] < menor ){
            menor = vetor [i]
        }
    }
    return menor
}

console.log (menor([5,7,9,3,8,1,-15]))

// ou 

function menorNumero(numeros) {
    return Math.min(...numeros);
    }

    console.log (menorNumero([5,7,9,3,8,1,-15]))  