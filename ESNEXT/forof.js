for (let letra of 'Cod3r') {
    console.log (letra)
}

const assuntosecma = ['map' , 'set' , 'promise']

for (let i in assuntosecma) {
    console.log (i)
}

for (let assunto of assuntosecma) {
    console.log (assunto)
}

const assuntosmap = new Map ([
    ['map' , {abordado: true}] ,
    ['Set' , {abordado: true}] ,
    ['promise' , {abordado: false}] 
])

for (let assunto of assuntosmap) {
    console.log (assunto)
}

for (let chave of  assuntosmap.keys()) {
     console.log (chave)
}

for(let valor of assuntosmap.values()) {
    console.log (valor)
}

for (let [ch,vl] of assuntosmap.entries()) {
    console.log (ch,vl)
}

const s = new Set (['a' , 'b' , 'c'])
for (let letra of s) {
    console.log (letra)
}