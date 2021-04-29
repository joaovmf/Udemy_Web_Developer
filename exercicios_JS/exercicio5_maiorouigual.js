function maiorouigual (n1,n2) {
    if (typeof n1 != typeof n2){
        return false 
    }else if (n1 >= n2){
        return true
    } else {
        return false
    }
}

console.log (maiorouigual('6',3))
console.log (maiorouigual(4,3))
console.log (maiorouigual(3,3))
console.log (maiorouigual(2,3))