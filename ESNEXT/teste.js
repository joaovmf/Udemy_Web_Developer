

const assuntosmap = new Map ([
    ['map' , {abordado: true}] ,
    ['Set' , {abordado: true}] ,
    ['promise' , {abordado: false}] 
])

for (let palavra of assuntosmap) {
    console.log (palavra)
}

for (let chave of  assuntosmap.keys()) {
    console.log (chave)
}

for(let valor of assuntosmap.values()) {
   console.log (valor)
}