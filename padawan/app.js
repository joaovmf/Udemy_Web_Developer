//const variables = require('./variables')

//variables.printDate()
//variables.printName()
//console.log(variables.name)

const variables = require('./movieController')

variables.filmes.filter(filter => filter.id == 1).map(variables.mostrarFilme)

variables.filmes.map(variables.mostrarFilme)