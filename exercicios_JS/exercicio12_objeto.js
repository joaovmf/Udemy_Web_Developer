function removerpropriedade (objeto, atributo) {
    const copia = Object.assign({}, objeto)
    delete copia [atributo]
    return copia
}

console.log (removerpropriedade({a: 1, b: 2}, "a"))

console.log (removerpropriedade({id: 20, nome: "caneta", descricao: "Não preenchido"}, "descricao"))