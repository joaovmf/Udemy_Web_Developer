function gerarnumeroentre (min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise (resolve => {
        setTimeout(function(){
            const aleatorio = parseInt (Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })

}

function gerarvariosnumeros() {
    return Promise.all([
        gerarnumeroentre (1, 60, 4000),
        gerarnumeroentre (1, 60, 1000),
        gerarnumeroentre (1, 60, 2000),
        gerarnumeroentre (1, 60, 3000),
        gerarnumeroentre (1, 60, 5000),
    ])
}

gerarvariosnumeros()
    .then(numeros => console.log (numeros))