function calcularAnoBissexto (ano) {
    if (ano <= 0){
        console.log('Digite um ano maior que 0')
    } else if (ano % 400 == 0) {
        console.log ('Este ano é bissexto')
    } else if (ano % 100 == 0) {
        console.log ('Este ano não é bissexto')
    } else if (ano % 4 == 0) {
        console.log ('Este ano é bissexto')
    } else {
        console.log ('Este ano não é bissexto')
    }
}

calcularAnoBissexto(0)
calcularAnoBissexto(4)
calcularAnoBissexto(100)
calcularAnoBissexto(400)
calcularAnoBissexto(800)
calcularAnoBissexto(2020)
calcularAnoBissexto(2021)

//ou posso fazer da forma abaixo retornando true e false. 

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))



