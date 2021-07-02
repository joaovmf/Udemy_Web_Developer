const idClassic = 'classic'
const idPrequel = 'prequel'
const idSpin = 'spin'
const idNew = 'new'

mountMovie = (name, year, ordination, image, id) => {
    return { name, year, ordination, image, id }
}

const starWarsMovies = [
    mountMovie('Episódio 4 - Uma nova esperança', 1977, 'Primeiro Lançamento', 'https://images5.alphacoders.com/111/thumb-1920-1113726.jpg', idClassic),
    mountMovie('Episódio 5 - O Império Contra-ataca', 1980, 'Segundo Lançamento', 'https://i.pinimg.com/474x/f5/a5/fc/f5a5fcfdd06cc3ec9f724698d28d2831.jpg', idClassic),
    mountMovie('Episódio 6 - Retorno dos Jedi', 1983, 'Terceiro Lançamento', 'https://images3.alphacoders.com/111/thumb-1920-1115523.jpg', idClassic)
]

addMovieInArray = (name, year, ordination, image, id) => starWarsMovies.push(mountMovie(name, year, ordination, image, id))

addAllMoviesInArray = () => {
    addMovieInArray('Episódio 1 - Ameaça Fantasma', 1999, 'Quarto Lançamento', 'https://i.pinimg.com/originals/61/1d/ba/611dba23cb1e960da85a261cfa8bb6e7.jpg','prequel')
    addMovieInArray('Episódio 2 - Ataque dos clones', 2002, 'Quinto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/12/20207108.jpg','prequel')
    addMovieInArray('Episódio 3 - Vingança dos Sith', 2005, 'Sexto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg','prequel' )
    addMovieInArray('Solo: Uma história de Star Wars', 2018, 'Décimo Lançamento', 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg','spin')
    addMovieInArray('Rogue One: Uma história de Star Wars', 2016, 'Oitavo Lançamento', 'https://i.pinimg.com/originals/37/e0/85/37e0857b9abe952bd2cd87064ec50508.jpg','spin')
    addMovieInArray('Episodio 7 - O Despertar da Força', 2015,'Sétimo Lançamento','https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg','new'),
    addMovieInArray('Episodio 8 - O Ultimo Jedi',2017, 'Nono Lançamento' , 'https://i.pinimg.com/originals/ca/70/81/ca7081d4a3ac2f45139d71d2204a78da.jpg','new'),
    addMovieInArray('Episodio 9 - A Ascensão Skywalker', 2019,'Décimo Primeiro Lançamento' , 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg','new')
}

mountVisualizationOfMovie = (movie) => console.log(`_______________________________________________________________________________________________                                                                                                 
    Nome: ${movie.name}                                                                                                
    Ano de Lançamento: ${movie.year}                                                                                                  
    Ordenação: ${movie.ordination}                                                                                     
    Imagem: ${movie.image}`)

filterAndMapMovieById = (param) => starWarsMovies.filter(filter => filter.id == param).map(mountVisualizationOfMovie)

showAllMovies = () => starWarsMovies.map(mountVisualizationOfMovie)

showClassicMovies = () => filterAndMapMovieById(idClassic)

showNewMovies = () => filterAndMapMovieById(idNew)

showPrequelMovies = () => filterAndMapMovieById(idPrequel)

showSpinMovies = () => filterAndMapMovieById(idSpin)

module.exports = {
    idNew,
    idPrequel,
    idSpin,
    idClassic,
    showAllMovies,
    showClassicMovies,
    showNewMovies,
    showPrequelMovies,
    showSpinMovies,
    addAllMoviesInArray
}