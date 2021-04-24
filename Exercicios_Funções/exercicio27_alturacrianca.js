function calcularCrescimento (altura1, taxa1,altura2,taxa2) {
    if (altura1 == altura2){
        if (taxa1 > taxa2){
            console.log ('A crianca 1 ultrapassará a crianca 2 em 1 ano')
        }else if (taxa2 > taxa1){
            console.log ('A crianca 2 ultrapassará a crianca 1 em 1 ano')
        }else{
            console.log ('As criancas tem igual altura e crescimento')
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                console.log ('A crianca menor não ultrapassará a maior')
            }else{
                console.log (calcularTempo(altura2, taxa2, altura1, taxa1) )
            }
        } else {
            if(taxa2 >= taxa1){
                console.log ('A criança menor não ultrapassará a maior.')
            }else{
               console.log (calcularTempo(altura1, taxa1, altura2, taxa2))
            }
        }
    }
}
function calcularTempo (alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

calcularCrescimento(150, 2, 130, 4)