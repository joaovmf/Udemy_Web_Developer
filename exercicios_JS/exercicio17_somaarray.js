function soma (vetor) {
    let total = 0
    for (i = 0 ; i < vetor.length ; i++){
        total = total + vetor [i]
    }
    return total
}

const vet = [2,2,2]

console.log (soma(vet))