function calculadora (n1, operacao, n2) {
    switch (operacao) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case 'x':
            return n1 * n2
        case '/':
            return n1 / n2
        default: 
            return "Operação inválida"
    }
}

console.log (calculadora (2, '+', 2))
console.log (calculadora (2, '-', 2))
console.log (calculadora (2, 'x', 2))
console.log (calculadora (2, '/', 2))