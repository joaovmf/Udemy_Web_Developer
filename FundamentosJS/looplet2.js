const funcs = []

for (let i = 0 ; i < 10 ; i++){
    funcs.push (function() {
        console.log (i)
    })
}

funcs [2]()
funcs [6]()
funcs [8]() 

//como o let tem escopo local (de bloco em bloco) ele imprimiu o valor exato da variavel nas posições do array em cada momento da contagem. 