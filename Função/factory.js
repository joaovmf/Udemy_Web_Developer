function criarpessoa (nome, sobrenome){
    return { 
        nome,
        sobrenome
    }
}

console.log (criarpessoa('joão', 'victor'))

console.log (criarpessoa('luana', 'dias'))

function criarproduto (nome, preço) {
    return {
        nome,
        preço
    }
}

console.log (criarproduto('celular', 2000.00))
console.log (criarproduto ('notebook', 3799.99))
