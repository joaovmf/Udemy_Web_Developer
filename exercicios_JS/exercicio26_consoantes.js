function removervogais (frase) {
    const vogais = [a,A,e,E,i,I,o,O,u,U]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    return frase
}

//ou

function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
    }