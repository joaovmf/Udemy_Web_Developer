function media (vetor) {
    let total = 0 
    for (let i = 0 ; i < vetor.length ; i++) {
        total = total + vetor [i]
    }
    total = total / vetor.length
    return total
}

const vet = [5,10]

console.log (media(vet))