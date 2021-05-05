//ta dando erro nao sei pq 

function gerarnumerosentre (min, max, numerosproibidos) {
    if (min > max) [max, min] = [min,max]
    return new Promise ((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator ) + min
        if(numerosproibidos.includes(aleatorio)) {
            reject('numero repetido')
        } else {
            resolve (aleatorio)
        }
    })
}

gerarnumerosentre (1 , 5 [1, 2 , 4])
    .then(console.log)
    .catch(console.log)