let vetorpilha = [1,2,3,4,5]
let vetoradiciona = [6,7,8,9,10]

function adicionavetor(vetorinicial, vetoradicionar) {
    for(let i = 0; i < vetoradicionar.length; i++) {
        console.log(vetoradicionar[i])
        vetorinicial.push(vetoradicionar[i])
    }
    console.log('Vetor adicionado: ' + vetoradicionar)
    console.log('Vetor resultado: ' + vetorinicial)
}

adicionavetor(vetorpilha, vetoradiciona)