function salario (salario,plano) {
    switch (plano) {
        case 'A':
            return salario * 0.10 + salario
        case 'B':
            return salario * 0.15 + salario
        case 'C':
            return salario * 0.20 + salario
            default:
                return 'Plano inválido'
    }
}

console.log (' o novo salario do funcionário é : ', salario (1000,'A'))
console.log (' o novo salario do funcionário é : ', salario (1000,'B'))
console.log (' o novo salario do funcionário é : ', salario (1000,'C'))
console.log (salario (1000,'D'))