let p = new Promise (function(novapromessa) {
    novapromessa (123)
})

p.then (function (valor){
    console.log(valor)
})

let a = new Promise (function(novapromessa2){
    novapromessa2(9)
})

p.then (function (valor2){
    console.log (valor2)
})