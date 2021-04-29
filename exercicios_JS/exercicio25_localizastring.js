function buscarPalavrasSemelhantes(inicio, palavras) {
    console.log (palavras.filter(palavra => palavra.includes(inicio)))
    }

    buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]

    buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"]