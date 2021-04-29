function segundoMaior(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    console.log (segundoMaior)
    }

    segundoMaior([12, 16, 1, 5]) // retornará 12
    segundoMaior([8, 4, 5, 6]) // retornará 6

