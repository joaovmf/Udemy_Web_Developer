function jurossimples (capitalinicial,taxa,tempo) {
    console.log (capitalinicial + (capitalinicial * taxa * tempo))
}

function juroscompostos (capitalinicial,taxa,tempo) {
    console.log (capitalinicial * (1+ taxa)  ** tempo)
}

jurossimples (100,0.1,2)

juroscompostos (100, 0.1, 2)




