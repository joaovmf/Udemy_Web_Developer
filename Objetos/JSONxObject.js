const obj = {a: 1, b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // converte o objeto para JSON. A função foi excluída.


console.log (JSON.parse ('{ "a" : 1, "b" : 2, "c" : 3 }')) //converte o JSON para um objeto normal. 
console.log (JSON.parse ('{ "a" : 1, "b" : "string", "c" : true, "d" : {}, "e": [] }'))

