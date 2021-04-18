function tratarerroelancar (erro){
    //throw new Error (" Nosso suporte técnico foi informado ")
    //throw 10
    throw 'ERRO: Nosso suporte tecnico foi informado '
}

function imprimirnome(obj) {
    try {
    console.log(obj.name.toUpperCase() + ' !!! ')
    } catch (e) {
        tratarerroelancar (e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirnome (obj)