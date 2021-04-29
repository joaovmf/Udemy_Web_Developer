function contarcaractere (caractere, frase) {
    let contador = 0 
    for (let i = 0 ; i < frase.length ; i++){
        if (frase.charAt(i)===caractere){
            contador ++
        }
    }
    return contador
}

console.log (contarcaractere("r", "A sorte favorece os audazes")) // retornará 2
console.log (contarcaractere("c", "Conhece-te a ti mesmo")) // retornará 1