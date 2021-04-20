const resultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
            console.log ('Quadro de Honra')
            break
        case 9: 
            console.log ('Destaque')
            break

        case 8: case 7:
            console.log ('Aprovado')
            break

        case 6: case 5: case 4:
            console.log ('Recuperação')
            break

        case 3: case 2: case 1: case 0:
            console.log ('Reprovado')
            break
            default:
                console.log(' Nota inválida ')
    }
    
}

resultado (10)
resultado (9.1)
resultado (7.5)
resultado (5.4)
resultado (3.9)
resultado (11)