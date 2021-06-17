    //factory function
    filmes = (nome,ano,ordenacao,imagem) => {
        return {
        nome ,
        ano,
        ordenacao,
        imagem
        }
    }

    f1 = filmes ('Episódio 1 - Ameaça Fantasma', 1999, 'Quarto Lançamento', 'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg')
    f2 = filmes ('Episódio 2 - Ataque dos clones', 2002, 'Quinto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg')
    f3 = filmes ('Episódio 3 - Vingança dos Sith', 2005, 'Sexto Lançamento', 'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg' )
    f4 = filmes ('Solo: Uma história de Star Wars', 2018, 'Décimo Lançamento', 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg')
    f5 = filmes ('Rogue One: Uma história de Star Wars', 2016, 'Oitavo Lançamento', 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/62/Rogue_One_-_A_Star_Wars_Story.jpg/250px-Rogue_One_-_A_Star_Wars_Story.jpg')
    f6 = filmes ('Episódio 4 - Uma nova esperança', 1977, 'Primeiro Lançamento', 'https://hqscomcafe.com.br/wp-content/uploads/2020/09/Frases-Star-Wars-Episodio-4-800x445.jpg')
    f7 = filmes ('Episódio 5 - O Império Contra-ataca', 1980, 'Segundo Lançamento', 'http://3.bp.blogspot.com/_ZyBGdXZ4e5A/TM7dblW0iFI/AAAAAAAAT3s/p46dAyWo7wc/s400/5.jpg')
    f8 = filmes ('Episódio 6 - Retorno dos Jedi', 1983, 'Terceiro Lançamento', 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg')
    f9 = filmes (' Episodio 7 - O Despertar da Força', 2015, 'Sétimo Lançamento', 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg')
    f10 = filmes ('Episodio 8 - O Ultimo Jedi', 2017, 'Nono Lançamento', 'https://www.showmetech.com.br/wp-content/uploads//2017/12/swlastjedinewtrailer-imagem01.jpg')
    f11 = filmes ('Episodio 9 - A Ascensão Skywalker', 2019, 'Décimo Primeiro Lançamento', 'https://i.pinimg.com/564x/79/47/69/794769619f4ea94e6a76e3ae0bb6192a.jpg')


    sequenciaTime = () => {
        console.log (`-----------------------------------------------`)
        console.log (`| Ordem de acordo com a cronologia dos fatos  |`)
        console.log (`-----------------------------------------------`)
        console.log (` `)
        console.log (`${f1.nome}, ${f1.ano}, ${f1.ordenacao}, ${f1.imagem}`)
        console.log (` `)
        console.log (`${f2.nome}, ${f2.ano}, ${f2.ordenacao}, ${f2.imagem}`)
        console.log (` `)
        console.log (`${f3.nome}, ${f3.ano}, ${f3.ordenacao}, ${f3.imagem}`)
        console.log (` `)
        console.log (`${f4.nome}, ${f4.ano}, ${f4.ordenacao}, ${f4.imagem}`)
        console.log (` `)
        console.log (`${f5.nome}, ${f5.ano}, ${f5.ordenacao}, ${f5.imagem}`)
        console.log (` `)
        console.log (`${f6.nome}, ${f6.ano}, ${f6.ordenacao}, ${f6.imagem}`)
        console.log (` `)
        console.log (`${f7.nome}, ${f7.ano}, ${f7.ordenacao}, ${f7.imagem}`)
        console.log (` `)
        console.log (`${f8.nome}, ${f8.ano}, ${f8.ordenacao}, ${f8.imagem}`)
        console.log (` `)
        console.log (`${f9.nome}, ${f9.ano}, ${f9.ordenacao}, ${f9.imagem}`)
        console.log (` `)
        console.log (`${f10.nome}, ${f10.ano}, ${f10.ordenacao}, ${f10.imagem}`)
        console.log (` `)
        console.log (`${f11.nome}, ${f11.ano}, ${f11.ordenacao}, ${f11.imagem}`)
    }
    
    //sequenciaTime()

    trilogiaClassica = () => {
        console.log (`---------------------`)
        console.log (`| Trilogia Clássica |`)
        console.log (`---------------------`)
        console.log (` `)
        console.log (`${f1.nome}, ${f1.ano}, ${f1.ordenacao}, ${f1.imagem}`)
        console.log (` `)
        console.log (`${f2.nome}, ${f2.ano}, ${f2.ordenacao}, ${f2.imagem}`)
        console.log (` `)
        console.log (`${f3.nome}, ${f3.ano}, ${f3.ordenacao}, ${f3.imagem}`)
    }
    
    //trilogiaClassica()
    
    trilogiaPrequel = () => {
        console.log (`--------------------`)
        console.log (`| Trilogia Prequel |`)
        console.log (`--------------------`)
        console.log(' ')
        console.log (`${f6.nome}, ${f6.ano}, ${f6.ordenacao}, ${f6.imagem}`)
        console.log (` `)
        console.log (`${f7.nome}, ${f7.ano}, ${f7.ordenacao}, ${f7.imagem}`)
        console.log (` `)
        console.log (`${f8.nome}, ${f8.ano}, ${f8.ordenacao}, ${f8.imagem}`)
    }
    
    //trilogiaPrequel()
    
    novaTrilogia = () => {
        console.log (`-----------------`)
        console.log (`| Nova Trilogia |`)
        console.log (`-----------------`)
        console.log (` `)
        console.log (`${f9.nome}, ${f9.ano}, ${f9.ordenacao}, ${f9.imagem}`)
        console.log (` `)
        console.log (`${f10.nome}, ${f10.ano}, ${f10.ordenacao}, ${f10.imagem}`)
        console.log (` `)
        console.log (`${f11.nome}, ${f11.ano}, ${f11.ordenacao}, ${f11.imagem}`)
    }
    
    //novaTrilogia()
    
    spinOff = () => {
        console.log (`-----------`)
        console.log (`| SpinOff |`)
        console.log (`-----------`)
        console.log (` `)
        console.log (`${f4.nome}, ${f4.ano}, ${f4.ordenacao}, ${f4.imagem}`)
        console.log (` `)
        console.log (`${f5.nome}, ${f5.ano}, ${f5.ordenacao}, ${f5.imagem}`)
    }
    //spinOff()
    