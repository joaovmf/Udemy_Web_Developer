function sorte (numero) {
    const min = 1
    const max = 5
    const na = Math.floor(Math.random() * (max - min + 1) + min)
    if (na == numero) {
        console.log ('Parabéns, você acertou o numero :', na)
    }else {
        console.log ('Infelizmente você errou o numero : ', na)
    }
}

sorte (4)
