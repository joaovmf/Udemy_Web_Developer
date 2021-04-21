function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log ('Valor acima do permitido:', area, ' m²')
    } else {
        return area 
    }
}

console.log (area(2,2))
console.log (area(10,10))
console.log ('FIM FUNÇÃO COM RETORNO.')

//ou posso usar da forma abaixo 

function area2 (largura, altura) {
    const area2 = largura * altura
    if (area2 > 20) {
        console.log ('Valor acima do permitido:', area2, ' m²')
    } else {
        console.log (area2)
    }
}

area2(2,2)
area2(10,10)

console.log ('FIM FUNÇÃO SEM RETORNO.')
