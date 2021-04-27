const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function (nome, indice) {
    console.log (`${indice + 1} ${nome}`)
})

aprovados.forEach((nome,indice) => console.log (indice + 1,nome)) // funcao arrow anonima com parametros nome e indice

const exibiraprovados = (aprovado, indice) => console.log (indice + 1, aprovado) 
aprovados.forEach(exibiraprovados)

    //FOR EACH SÓ RECEBE TRES PARAMETROS -> O NOME (NOME, APROVADO...), O INDICE E O ARRAY. CABOSSE. 