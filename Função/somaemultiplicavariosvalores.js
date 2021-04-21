
 function soma (){ 
    let result = 0;
    for(let i in arguments){
        result = result + arguments[i]; 
     }
    console.log(result);
    return result;
 }

 soma (10,10,10)

 function mult (){ 
    let result = 1;
    for(let i in arguments){
        result = result * arguments[i]; 
     }
    console.log(result);
    return result;
 }

 mult (10,10,10)

function soma2 () {
    var val = 0
    for (var i = 0; i < arguments.length; i++){
    val += arguments[i]
    }
    return val
}

console.log (soma2 (10,10,10))
 
function mult2 () {
    var val = 1
    for (var i = 0; i < arguments.length; i++){
    val *= arguments[i]
    }
    return val
}

console.log (mult2 (10,10,10))

function concat () {
    var val = " "
    for (var i = 0; i < arguments.length ; i++){
        val += arguments[i]
    }
    return val 
}

console.log (concat('cachorro,', ' gato,', ' papagaio,', ' passaro'))




