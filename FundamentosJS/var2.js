var numero = 1 

{
    var numero = 2
    console.log ('dentro = ', numero)
}

console.log ('fora = ', numero )

//fuja do escopo global com var, sempre dê prioridade ao escopo local. 
//abaixo diferença de let 

var numero = 1 
{
    let numero = 2 
    console.log ('dentro = ', numero)
}
console.log ('fora = ', numero)

//ou seja, com let sempre vale o escopo local. 