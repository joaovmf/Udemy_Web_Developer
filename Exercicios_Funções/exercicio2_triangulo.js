
function triangulo (l1,l2,l3) {
    if (l1 == l2 && l2 == l3) {
        console.log ('este triangulo é equilatero')
        }else if (l1 != l2 && l2 != l3 && l1 != l3){
            console.log ('este triangulo é escaleno')
        }else{
            console.log ('este triangulo é isósceles')
        }
}

triangulo (3,3,3)
triangulo (3,1,2)
triangulo (3,3,1)
