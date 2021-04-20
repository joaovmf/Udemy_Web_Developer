function numeroaleatorio (min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//função que retorna valor aleatório entre um minimo e um máximo. 

let opcao = 0

while (opcao != -1) {
    opcao = numeroaleatorio  (-1,10)
    console.log ('Opção escolhida foi : ', opcao)
}

console.log ('Até a próxima.')