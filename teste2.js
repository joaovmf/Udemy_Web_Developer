const starWars = [{nome: 'Episódio 1 - Ameaça Fantasma',
        ano: 1999,
        ordenacao: 'Quarto Lançamento',
        imagem: 'https://i.pinimg.com/originals/61/1d/ba/611dba23cb1e960da85a261cfa8bb6e7.jpg',
        categoria: 'prequel'
    },
    {
        nome: 'Episódio 2 - Ataque dos clones',
        ano: 2002,
        ordenacao: 'Quinto Lançamento',
        imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/12/20207108.jpg',
        categoria: 'prequel'
    },
    {
        nome: 'Episódio 3 - Vingança dos Sith',
        ano: 2005,
        ordenacao: 'Sexto Lançamento',
        imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg',
        categoria: 'prequel'
    },
    {
        nome: 'Solo: Uma história de Star Wars',
        ano: 2018,
        ordenacao: 'Décimo Lançamento' ,
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg',
        categoria: 'spin'
    },
    {
        nome: 'Rogue One: Uma história de Star Wars',
        ano: 2016,
        ordenacao: 'Oitavo Lançamento' ,
        imagem: 'https://i.pinimg.com/originals/37/e0/85/37e0857b9abe952bd2cd87064ec50508.jpg',
        categoria: 'spin'
    },
    {
        nome: 'Episódio 4 - Uma nova esperança',
        ano: 1977,
        ordenacao: 'Primeiro Lançamento',
        imagem: 'https://images5.alphacoders.com/111/thumb-1920-1113726.jpg',
        categoria: 'classica'

    },
    {
        nome: 'Episódio 5 - O Império Contra-ataca',
        ano: 1980,
        ordenacao: 'Segundo Lançamento',
        imagem: 'https://i.pinimg.com/474x/f5/a5/fc/f5a5fcfdd06cc3ec9f724698d28d2831.jpg',
        categoria: 'classica'
    },
    {
        nome: 'Episódio 6 - Retorno dos Jedi',
        ano: 1983,
        ordenacao: 'Terceiro Lançamento',
        imagem: 'https://images3.alphacoders.com/111/thumb-1920-1115523.jpg',
        categoria: 'classica'
    },
    {
        nome: ' Episodio 7 - O Despertar da Força',
        ano: 2015,
        ordenacao: 'Sétimo Lançamento',
        imagem: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg',
        categoria: 'nova'
    },
    {
        nome: 'Episodio 8 - O Ultimo Jedi',
        ano: 2017,
        ordenacao: 'Nono Lançamento' ,
        imagem: 'https://i.pinimg.com/originals/ca/70/81/ca7081d4a3ac2f45139d71d2204a78da.jpg',
        categoria: 'nova'
    },
    {
        nome: 'Episodio 9 - A Ascensão Skywalker',
        ano: 2019,
        ordenacao: 'Décimo Primeiro Lançamento' ,
        imagem: 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg',
        categoria: 'nova'
    }]

    lista = (filme) => {
        console.log(`______________________________________________________________________________________________________                                                                                                      
        Nome: ${filme.nome}                                                                                                
        Ano de Lançamento: ${filme.ano}                                                                                                  
        Ordenação: ${filme.ordenacao}                                                                                     
        Imagem: ${filme.imagem}                                                                                            
        `)
    }

     mapAll = () => {
        console.log (`-----------------------------------------------`)
        console.log (`| Ordem de acordo com a cronologia dos fatos  |`)
        console.log (`-----------------------------------------------`)
        starWars.map(lista)
    }

    //mapAll()

    classicTrilogy = () => {
        console.log (`---------------------`)
        console.log (`| Trilogia Clássica |`)
        console.log (`---------------------`)
        starWars.filter(starWars => starWars.categoria == 'classica').map(lista)
        }
    
    
    //classicTrilogy()

    prequelTrilogy = () => {
        console.log (`--------------------`)
        console.log (`| Trilogia Prequel |`)
        console.log (`--------------------`)
        starWars.filter(starWars => starWars.categoria == 'prequel').map(lista)
    }
    
    //prequelTrilogy()
    
    newTrilogy = () => {
        console.log (`-----------------`)
        console.log (`| Nova Trilogia |`)
        console.log (`-----------------`)
        starWars.filter(starWars => starWars.categoria == 'nova').map(lista)
    }
    
    //newTrilogy()
    
    spinOff = () => {
        console.log (`-----------`)
        console.log (`| Spin Off |`)
        console.log (`-----------`)
        starWars.filter(starWars => starWars.categoria == 'spin').map(lista)
    }

    //spinOff()