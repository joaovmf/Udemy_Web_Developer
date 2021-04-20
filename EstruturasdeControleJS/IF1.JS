function soboanoticia (nota) {
    if (nota >= 7) {
        console.log ("Você foi aprovado com nota : ", nota)
    }
}

soboanoticia (8.1)
soboanoticia (6.1)

function seforverdadeeufalo (valor) {
    if (valor) { //JS entende que o valor é verdadeiro ou falso quando nao atribuo comparação. 
        console.log ('É verdade ... ' + valor)
    }
}

seforverdadeeufalo ()
seforverdadeeufalo (null)
seforverdadeeufalo (undefined)
seforverdadeeufalo (NaN)
seforverdadeeufalo ('')
seforverdadeeufalo (0)
seforverdadeeufalo (-1)
seforverdadeeufalo (' ')
seforverdadeeufalo ('?')
seforverdadeeufalo ([])
seforverdadeeufalo ([1,2])
seforverdadeeufalo ({})
