function falardepoisde (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falardepoisde(3 , 'Que legal!')
    .then (frase => frase.concat('?!?'))
    .then (outrafrase => console.log (outrafrase))