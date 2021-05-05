function funcionarounao(valor, chancedeerro) {
        return new Promise ((resolve, reject) => {
            if (Math.random() < chancedeerro) {
                reject ('ERROR')
            }else{
                resolve(valor)
            }
        })
}

funcionarounao ('testando...' , 0.5)
    .then (v => console.log(`Valor:${v}`)) //posso colocar só: .then(console.log) que dá certo, sem o catch de baixo. 
    .catch(err => console.log (`Erro: ${err}`))