  
const movieController = require('./movieController')


movieController.addMovie('Episódio 1 - Ameaça Fantasma', 1999, 'Quarto Lançamento', 'https://i.pinimg.com/originals/61/1d/ba/611dba23cb1e960da85a261cfa8bb6e7.jpg',movieController.idPrequel)
movieController.addMovie('Episódio 2 - Ataque dos clones', 2002, 'Quinto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/12/20207108.jpg',movieController.idPrequel)
movieController.addMovie('Episódio 3 - Vingança dos Sith', 2005, 'Sexto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg',movieController.idPrequel)
movieController.addMovie('Solo: Uma história de Star Wars', 2018, 'Décimo Lançamento', 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg',movieController.idSpin)
movieController.addMovie('Rogue One: Uma história de Star Wars', 2016, 'Oitavo Lançamento', 'https://i.pinimg.com/originals/37/e0/85/37e0857b9abe952bd2cd87064ec50508.jpg',movieController.idSpin)
movieController.addMovie('Episodio 7 - O Despertar da Força', 2015,'Sétimo Lançamento','https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg',movieController.idNew),
movieController.addMovie('Episodio 8 - O Ultimo Jedi',2017, 'Nono Lançamento' , 'https://i.pinimg.com/originals/ca/70/81/ca7081d4a3ac2f45139d71d2204a78da.jpg',movieController.idNew),
movieController.addMovie('Episodio 9 - A Ascensão Skywalker', 2019,'Décimo Primeiro Lançamento' , 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg',movieController.idNew)



//  movieController.showAllMovies()
 //movieController.showClassicMovies()
 //movieController.showPrequelMovies()
//  movieController.showNewMovies()
 movieController.showSpinMovies()