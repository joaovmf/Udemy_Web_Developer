let dobro = function a () {
    return a * 2 
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implicito 

console.log (dobro (10))

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!'

console.log (ola ())

