const starWars = [{nome: 'Episódio 1 - Ameaça Fantasma',
        ano: 1999,
        ordenacao: 'Quarto Lançamento',
        imagem: 'https://i.pinimg.com/originals/61/1d/ba/611dba23cb1e960da85a261cfa8bb6e7.jpg'
    },

    {
        nome: 'Episódio 2 - Ataque dos clones',
        ano: 2002,
        ordenacao: 'Quinto Lançamento',
        imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/12/20207108.jpg'
    },

     {
        nome: 'Episódio 3 - Vingança dos Sith',
        ano: 2005,
        ordenacao: 'Sexto Lançamento',
        imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg'
    },

    {
        nome: 'Solo: Uma história de Star Wars',
        ano: 2018,
        ordenacao: 'Décimo Lançamento' ,
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg'
    },

    {
        nome: 'Rogue One: Uma história de Star Wars',
        ano: 2016,
        ordenacao: 'Oitavo Lançamento' ,
        imagem: 'https://i.pinimg.com/originals/37/e0/85/37e0857b9abe952bd2cd87064ec50508.jpg'
    },

    {
        nome: 'Episódio 4 - Uma nova esperança',
        ano: 1977,
        ordenacao: 'Primeiro Lançamento',
        imagem: 'https://images5.alphacoders.com/111/thumb-1920-1113726.jpg'
    },
    
    {
        nome: 'Episódio 5 - O Império Contra-ataca',
        ano: 1980,
        ordenacao: 'Segundo Lançamento',
        imagem: 'https://i.pinimg.com/474x/f5/a5/fc/f5a5fcfdd06cc3ec9f724698d28d2831.jpg'
    },
    
    {
        nome: 'Episódio 6 - Retorno dos Jedi',
        ano: 1983,
        ordenacao: 'Terceiro Lançamento',
        imagem: 'https://images3.alphacoders.com/111/thumb-1920-1115523.jpg'
    },

    {
        nome: ' Episodio 7 - O Despertar da Força',
        ano: 2015,
        ordenacao: 'Sétimo Lançamento',
        imagem: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg'
    },

    {
        nome: 'Episodio 8 - O Ultimo Jedi',
        ano: 2017,
        ordenacao: 'Nono Lançamento' ,
        imagem: 'https://i.pinimg.com/originals/ca/70/81/ca7081d4a3ac2f45139d71d2204a78da.jpg'
    },

     {
        nome: 'Episodio 9 - A Ascensão Skywalker',
        ano: 2019,
        ordenacao: 'Décimo Primeiro Lançamento' ,
        imagem: 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg'
    }]

     mapAll = () => {
        console.log (`-----------------------------------------------`)
        console.log (`| Ordem de acordo com a cronologia dos fatos  |`)
        console.log (`-----------------------------------------------`)
        starWars.map (montarFilmes = (filmes) => {
        console.log (filmes.nome)
        console.log (filmes.ano)
        console.log (filmes.ordenacao)
        console.log (filmes.imagem)
        console.log (`___________________________________________________________________________________________________________________`)
    })}

    //mapAll()

    classicTrilogy = () => {
        console.log (`---------------------`)
        console.log (`| Trilogia Clássica |`)
        console.log (`---------------------`)
        console.log (` `)
        console.log (`${starWars[0].nome} | ano: ${starWars[0].ano} | Ordenação: ${starWars[0].ordenacao} | Imagem: ${starWars[0].imagem}`)
        console.log (` `)
        console.log (`${starWars[1].nome} | ano: ${starWars[1].ano} | Ordenação: ${starWars[1].ordenacao} | Imagem: ${starWars[1].imagem}`)
        console.log (` `)
        console.log (`${starWars[2].nome} | ano: ${starWars[2].ano} | Ordenação: ${starWars[2].ordenacao} | Imagem: ${starWars[2].imagem}`)
    }
    
    //classicTrilogy()
    
    prequelTrilogy = () => {
        console.log (`--------------------`)
        console.log (`| Trilogia Prequel |`)
        console.log (`--------------------`)
        console.log(` `)
        console.log (`${starWars[5].nome} | ano: ${starWars[5].ano} | Ordenação: ${starWars[5].ordenacao} | Imagem: ${starWars[5].imagem}`)
        console.log (` `)
        console.log (`${starWars[6].nome} | ano: ${starWars[6].ano} | Ordenação: ${starWars[6].ordenacao} | Imagem: ${starWars[6].imagem}`)
        console.log (` `)
        console.log (`${starWars[7].nome} | ano: ${starWars[7].ano} | Ordenação: ${starWars[7].ordenacao} | Imagem: ${starWars[7].imagem}`)
    }
    
    //prequelTrilogy()
    
    newTrilogy = () => {
        console.log (`-----------------`)
        console.log (`| Nova Trilogia |`)
        console.log (`-----------------`)
        console.log (` `)
        console.log (`${starWars[8].nome} | ano: ${starWars[8].ano} | Ordenação: ${starWars[8].ordenacao} | Imagem: ${starWars[8].imagem}`)
        console.log (` `)
        console.log (`${starWars[9].nome} | ano: ${starWars[9].ano} | Ordenação: ${starWars[9].ordenacao} | Imagem: ${starWars[9].imagem}`)
        console.log (` `)
        console.log (`${starWars[10].nome} | ano: ${starWars[10].ano} | Ordenação: ${starWars[10].ordenacao} | Imagem: ${starWars[10].imagem}`)
    }
    
    newTrilogy()
    
    spinOff = () => {
        console.log (`-----------`)
        console.log (`| Spin Off |`)
        console.log (`-----------`)
        console.log (` `)
        console.log (`${starWars[3].nome} | ano: ${starWars[3].ano} | Ordenação: ${starWars[3].ordenacao} | Imagem: ${starWars[3].imagem}`)
        console.log (` `)
        console.log (`${starWars[4].nome} | ano: ${starWars[4].ano} | Ordenação: ${starWars[4].ordenacao} | Imagem: ${starWars[4].imagem}`)
    }
    //spinOff()