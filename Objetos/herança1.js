const ferrari = {
    modelo: 'f40',
    velmax: 324
}

const volvo = {
    modelo: 'v40',
    velmax: 200
}

console.log (ferrari.prototype)
console.log (ferrari.__proto__)
console.log (ferrari.__proto__ === Object.prototype)
console.log (volvo.__proto__ === Object.prototype)
console.log (Object.prototype.__proto__)

function meuobjeto () {}
console.log (typeof Object, typeof meuobjeto)
console.log (Object.prototype, meuobjeto.prototype)