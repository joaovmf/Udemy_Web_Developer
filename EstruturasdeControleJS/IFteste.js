function soboanoticia (nota) {
    if (nota > 10 || nota < 0) {
        console.log ('ERRO, DIGITE UMA NOTA VALIDA')
    }else if (nota >= 7 || nota == 10){
        console.log ('Aprovado com nota : ', nota)
    }else{
        console.log ('Você foi reprovado com nota : ', nota)
    }
}

var n1 = 10 
var n2 = 100
var media = (n1 + n2) / 2

soboanoticia(media)
