function carro (velocidademaxima = 200, delta = 5) {
    //atributo privado (pertencente apenas ao escopo dessa função)
    let velocidadeatual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeatual + delta <= velocidademaxima) {
            velocidadeatual += delta
        }else{
            velocidadeatual = velocidademaxima
        }
    }

    //outro metodo publico 
    this.getvelocidadeatual = function () {
        return velocidadeatual  
    }
}

const uno = new carro 
uno.acelerar()
console.log (uno.getvelocidadeatual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log (ferrari.getvelocidadeatual())
// quantas vezes mais eu chamo o 'ferrari.acelerar' mais aumenta a velocidade dele. 

console.log (typeof carro)
console.log (typeof ferrari)

