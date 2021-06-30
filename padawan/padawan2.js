var filmes = []

function addFilmes(nome,ano,ordenacao,imagem, tipo) {
    filmes.push({
        nome,ano,ordenacao,imagem, tipo
    })
}

function carregarFilmesClassicos() {
    addFilmes('Episódio 4 - Uma nova esperança'     , 1977, 01, 'https://hqscomcafe.com.br/wp-content/uploads/2020/09/Frases-Star-Wars-Episodio-4-800x445.jpg', 'classico')
    addFilmes('Episódio 5 - O Império Contra-ataca' , 1980, 02, 'http://3.bp.blogspot.com/_ZyBGdXZ4e5A/TM7dblW0iFI/AAAAAAAAT3s/p46dAyWo7wc/s400/5.jpg', 'classico')
    addFilmes('Episódio 6 - Retorno dos Jedi'       , 1983, 03, 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg', 'classico')
}

function carregarFilmesNovaTrilogia() {    
    addFilmes('Episódio 1 - Ameaça Fantasma'        , 1999, 04, 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg', 'nova')
    addFilmes('Episódio 2 - Ataque dos clones'      , 2002, 05, 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg', 'nova')
    addFilmes('Episódio 3 - Vingança dos Sith'      , 2005, 06, 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg', 'nova')
}    

function carregarFilmesPrequel() {    
    addFilmes('Episodio 7 - O Despertar da Força'   , 2015, 07, 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg', 'prequel')
    addFilmes('Episodio 8 - O Ultimo Jedi'          , 2017, 09, 'https://www.showmetech.com.br/wp-content/uploads//2017/12/swlastjedinewtrailer-imagem01.jpg', 'prequel')
    addFilmes('Episodio 9 - A Ascensão Skywalker'   , 2019, 11, 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg', 'prequel')
}

function carregarFilmesSpinOff() {    
    addFilmes('Rogue One: Uma história de Star Wars', 2016, 08, 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Rogue_One_-_A_Star_Wars_Story.jpg/250px-Rogue_One_-_A_Star_Wars_Story.jpg', 'spin-off')
    addFilmes('Solo: Uma história de Star Wars'     , 2018, 10, 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg', 'spin-off')
}

function montarListaFilmes(filme) {
    console.log(`
        Nome: ${filme.nome}
        Ano: ${filme.ano}
    `)
}

carregarFilmesClassicos()
carregarFilmesNovaTrilogia()
carregarFilmesPrequel()
carregarFilmesSpinOff()

filmes.map(montarListaFilmes)
filmes.filter(f => f.tipo == 'classico').map(montarListaFilmes)
filmes.filter(f => f.tipo == 'novo').map(montarListaFilmes)
filmes.filter(f => f.tipo == 'prequel').map(montarListaFilmes)
filmes.filter(f => f.tipo == 'spin-off').map(montarListaFilmes)