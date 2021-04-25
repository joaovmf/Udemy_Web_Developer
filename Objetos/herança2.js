//cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'
const avo = {attr1: 'a'}
const pai = {__proto__: avo, attr2: 'b'}
const filho = {__proto__: pai, attr3: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velatual: 0,
    velmax: 200, 
    aceleramais(delta){
        if (this.velatual + delta <= this.velmax) {
            this.velatual += delta
        }else{
           this.velatual = this.velmax      
        }
    }, 
    status (){
        return `${this.velatual}Km/h de ${this.velmax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velmax: 324 //shadowing
}

const volvo = {
    modelo: 'v40',
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log (volvo)

volvo.aceleramais(100)
console.log(volvo.status())

ferrari.aceleramais(300)
console.log(ferrari.status())
