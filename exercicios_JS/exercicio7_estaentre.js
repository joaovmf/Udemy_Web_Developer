function estaentre (n1,n2,n3) {
    if (n3 < n2 && n3 > n1){
        return true 
    } else {
        return false 
    }
}

console.log (estaentre(10, 100, 50)) // retornará true
console.log (estaentre(16, 100, 160)) // retornará false
console.log (estaentre(3, 150, 3)) // retornará false
