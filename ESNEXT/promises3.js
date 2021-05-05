function gerarnumerosentre (min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise (resolve => {
        const aleatorio = parseInt (Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })

}

gerarnumerosentre(10,30)
    .then (num => num *10)
    .then (numx10 => `O numero gerado foi ${numx10}`)
    .then(console.log)

    //EXEMPLO ABAIXO COM REJECT DE NUMEROS IGUAIS

    /*function gerarnumerosentre (min, max , numerosproibidos) {
        if (min > max) {
            [max, min] = [min, max]
        }
    
        return new Promise (resolve => {
            const aleatorio = parseInt (Math.random() * (max - min + 1)) + min
            if (numerosproibidos.includes(aleatorio)){
                reject ('numero repetido')
            } else{
                resolve(aleatorio)
            }
            resolve(aleatorio)
        })
    
    } */