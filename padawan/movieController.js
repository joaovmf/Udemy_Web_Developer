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

addMovie = (name, year, ordination, image, id) => starWarsMovies.push(mountMovie(name, year, ordination, image, id))

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
    addMovie
}