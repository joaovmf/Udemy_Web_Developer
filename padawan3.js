//forma menos verbosa, utilizando função construtora.
function filmes (nome,ano,ordenacao,imagem) {
    this.nome = nome;
    this.ano = ano;
    this.ordenacao = ordenacao;
    this.imagem = imagem
}

f1 = new filmes ('Episódio 1 - Ameaça Fantasma', 1999, 'Quarto Lançamento', 'https://i.pinimg.com/originals/61/1d/ba/611dba23cb1e960da85a261cfa8bb6e7.jpg')
f2 = new filmes ('Episódio 2 - Ataque dos clones', 2002, 'Quinto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg')
f3 = new  filmes ('Episódio 3 - Vingança dos Sith', 2005, 'Sexto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg' )
f4 = new filmes ('Solo: Uma história de Star Wars', 2018, 'Décimo Lançamento', 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg')
f5 = new filmes ('Rogue One: Uma história de Star Wars', 2016, 'Oitavo Lançamento', 'https://i.pinimg.com/originals/37/e0/85/37e0857b9abe952bd2cd87064ec50508.jpg')
f6 = new filmes ('Episódio 4 - Uma nova esperança', 1977, 'Primeiro Lançamento', 'https://images5.alphacoders.com/111/thumb-1920-1113726.jpg')
f7 = new filmes ('Episódio 5 - O Império Contra-ataca', 1980, 'Segundo Lançamento', 'https://i.pinimg.com/474x/f5/a5/fc/f5a5fcfdd06cc3ec9f724698d28d2831.jpg')
f8 = new filmes ('Episódio 6 - Retorno dos Jedi', 1983, 'Terceiro Lançamento', 'https://images3.alphacoders.com/111/thumb-1920-1115523.jpg')
f9 = new filmes (' Episodio 7 - O Despertar da Força', 2015, 'Sétimo Lançamento', 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg')
f10 = new filmes ('Episodio 8 - O Ultimo Jedi', 2017, 'Nono Lançamento', 'https://i.pinimg.com/originals/ca/70/81/ca7081d4a3ac2f45139d71d2204a78da.jpg')
f11 = new filmes ('Episodio 9 - A Ascensão Skywalker', 2019, 'Décimo Primeiro Lançamento', 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg')

lista = (filme) => {
    console.log(`____________________________________________________________________________________________________                                                                                                  
    Nome: ${filme.nome}                                                                                                
    Ano de Lançamento: ${filme.ano}                                                                                                  
    Ordenação: ${filme.ordenacao}                                                                                     
    Imagem: ${filme.imagem}
    `)
}

sequencyTeam = () => {
    console.log (`-----------------------------------------------`)
    console.log (`| Ordem de acordo com a cronologia dos fatos  |`)
    console.log (`-----------------------------------------------`)
    console.log (lista(f1) , lista(f2) , lista(f3), lista(f4),lista(f5),lista(f6),lista(f7),lista(f8),lista(f9),lista(f10),lista(f11))
}

sequencyTeam()

classicTrilogy = () => {
    console.log (`---------------------`)
    console.log (`| Trilogia Clássica |`)
    console.log (`---------------------`)
    console.log (lista(f6), lista(f7), lista(f8))
}

//classicTrilogy()

trilogiaPrequel = () => {
    console.log (`--------------------`)
    console.log (`| Trilogia Prequel |`)
    console.log (`--------------------`)
    console.log (lista(f1), lista(f2), lista(f3))
}

//trilogiaPrequel()

novaTrilogia = () => {
    console.log (`-----------------`)
    console.log (`| Nova Trilogia |`)
    console.log (`-----------------`)
    console.log (lista(f9), lista(f10), lista(f11))
}

//novaTrilogia()

spinOff = () => {
    console.log (`-----------`)
    console.log (`| SpinOff |`)
    console.log (`-----------`)
    console.log (lista(f4), lista(f5))
}
//spinOff()