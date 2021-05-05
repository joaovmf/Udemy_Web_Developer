
let p = new Promise(function(cumprirPromessa){ //resolve
    cumprirPromessa(3) //apenas suporta um parametro
   })

    
   p.then(function(valor){ 
       console.log(valor) 
   })

let z = new Promise (function(novapromessa) { //forma de passar mais de um parâmetro.
       novapromessa ({
           x: 3,
           y:4
       })
   })

    z.then(function(valor){
       console.log (valor.x)
       console.log (valor.y)
       console.log(valor)
   })

let a = new Promise (function(promessa) {
       promessa (['João' , 'Laura' , 'Luana' , 'Isabel'])
   })

   a.then (function (valor){
       console.log (valor)
       console.log (valor[0])
   })

//with arrow function 

let b = new Promise (function(resolve) { //essa funcao dentro da promisse normalmente é chamada de resolve. 
       resolve(['isabel' , 'laura' , 'Luana']) 
   })

   const primeiroelemento = array => console.log (array[0])
   
   
    b.then(valor => console.log (valor))
    b.then(primeiroelemento)
    


//Fiz acima três formas diferentes de se trabalhar com promisses.
//uma promessa de algo que vai ser executado no futuro, e um dado que vai ser devolvido no futuro   
//para conseguir gerar esse dado, é necessário passar uma função para a promise 
//a função passada para a promise vai ser chamada quando se quiser cumprir a promessa
//o then também recebe uma função como parâmetro
//o valor passado para a função do then é aquele que foi cumprido pela função da promise
//também usa o conceito de callback, pois passa uma função como parâmetro e essa função é chamda quando a promessa é cumprida
//SÓ CONSIGO PASSAR UM UNICO PARÂMETRO PARA FUNÇÃO PROMISSE. Se quero passar mais de um tenho que usar objeto ou array.