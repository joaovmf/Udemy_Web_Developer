function array (vetor) {
    const primeiroelemento = vetor.shift()
    const ultimoelemento = vetor.pop()
    return [primeiroelemento, ultimoelemento]
    }

    console.log (array([1,2,3,4,5]))