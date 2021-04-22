const valor = 'Global'

function minhafuncao (){
    console.log (valor)
}

minhafuncao ()

function exec () {
    const valor = "Local"
    minhafuncao ()
}

exec () 

//funcao carrega consigo a informacao do contexto no qual ela foi declarada 