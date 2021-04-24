function negativos (vetor) {
    let negativo = 0 
    for (i = 0 ; i < vetor.length ; i++){
        if (vetor [i] < 0){
            negativo++
        }
    }
    console.log ('a quantidade de negativos é : ', negativo)
}

const vet = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

negativos (vet)
