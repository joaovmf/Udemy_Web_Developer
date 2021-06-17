
const StarWars = [{nome: 'Episódio 1 - Ameaça Fantasma',
        ano: 1999,
        ordenacao: 'Quarto Lançamento',
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg'
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
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Rogue_One_-_A_Star_Wars_Story.jpg/250px-Rogue_One_-_A_Star_Wars_Story.jpg'
    },

    {
        nome: 'Episódio 4 - Uma nova esperança',
        ano: 1977,
        ordenacao: 'Primeiro Lançamento',
        imagem: 'https://hqscomcafe.com.br/wp-content/uploads/2020/09/Frases-Star-Wars-Episodio-4-800x445.jpg'
    },
    
    {
        nome: 'Episódio 5 - O Império Contra-ataca',
        ano: 1980,
        ordenacao: 'Segundo Lançamento',
        imagem: 'http://3.bp.blogspot.com/_ZyBGdXZ4e5A/TM7dblW0iFI/AAAAAAAAT3s/p46dAyWo7wc/s400/5.jpg'
    },
    
    {
        nome: 'Episódio 6 - Retorno dos Jedi',
        ano: 1983,
        ordenacao: 'Terceiro Lançamento',
        imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg'
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
        imagem: 'https://www.showmetech.com.br/wp-content/uploads//2017/12/swlastjedinewtrailer-imagem01.jpg'
    },

     {
        nome: 'Episodio 9 - A Ascensão Skywalker',
        ano: 2019,
        ordenacao: 'Décimo Primeiro Lançamento' ,
        imagem: 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg'
    }]

    console.log (' ')

sequenciaTime = () => {
    console.log (`-----------------------------------------------`)
    console.log (`| Ordem de acordo com a cronologia dos fatos  |`)
    console.log (`-----------------------------------------------`)
    for (i = 0; i < StarWars.length; i++) {
        console.log(' ')
        console.log (StarWars[i].nome)
        console.log (`Ano: ${StarWars[i].ano} `)
        console.log (`Ordenação: ${StarWars[i].ordenacao} `)
        console.log (`Imagem: ${StarWars[i].imagem} `)
    }
}

//sequenciaTime()

trilogiaClassica = () => {
    console.log (`---------------------`)
    console.log (`| Trilogia Clássica |`)
    console.log (`---------------------`)
    for (i = 0 ; i <= 2 ; i++) {
        console.log(' ')
        console.log (StarWars[i].nome)
        console.log (`Ano: ${StarWars[i].ano} `)
        console.log (`Ordenação: ${StarWars[i].ordenacao} `)
        console.log (`Imagem: ${StarWars[i].imagem} `)
    }
}

//trilogiaClassica()

trilogiaPrequel = () => {
    console.log (`--------------------`)
    console.log (`| Trilogia Prequel |`)
    console.log (`--------------------`)
    for (i = 5 ; i <= 7 ; i++) {
    console.log(' ')
    console.log (StarWars[i].nome)
        console.log (`Ano: ${StarWars[i].ano} `)
        console.log (`Ordenação: ${StarWars[i].ordenacao} `)
        console.log (`Imagem: ${StarWars[i].imagem} `)
    }
}

//trilogiaPrequel()

novaTrilogia = () => {
    console.log (`-----------------`)
    console.log (`| Nova Trilogia |`)
    console.log (`-----------------`)
    for (i = 8 ; i <= 10 ; i++) {
    console.log(' ')
    console.log (StarWars[i].nome)
        console.log (`Ano: ${StarWars[i].ano} `)
        console.log (`Ordenação: ${StarWars[i].ordenacao} `)
        console.log (`Imagem: ${StarWars[i].imagem} `)
    }
}

//novaTrilogia()

spinOff = () => {
    console.log (`-----------`)
    console.log (`| SpinOff |`)
    console.log (`-----------`)
    for (i = 3 ; i <= 4 ; i++) {
    console.log(' ')
    console.log (StarWars[i].nome)
        console.log (`Ano: ${StarWars[i].ano} `)
        console.log (`Ordenação: ${StarWars[i].ordenacao} `)
        console.log (`Imagem: ${StarWars[i].imagem} `)
    }
}

//spinOff()
