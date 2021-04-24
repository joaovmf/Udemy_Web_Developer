function saude (idade) {
    let valor = 0 
    if (idade >= 0 && idade < 10){
        console.log (valor = 'R$ 180,00')
    }else if (idade >=10 && idade <= 30){
        console.log (valor = 'R$ 150,00')
    } else if (idade > 30 && idade <= 60){
        console.log (valor = 'R$ 195,00')
    } else if (idade > 60){
        console.log (valor = 'R$ 230,00')
    }else{
        console.log ('Idade incorreta.')
    }
}

saude (-1)
saude (5)
saude (15)
saude (35)
saude (61)
