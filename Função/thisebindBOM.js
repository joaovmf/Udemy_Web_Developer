let pessoa = {
    nome: 'joão',
    sobrenome: 'victor',
    nomeinteiro: function (){
        return this.nome + ' ' + this.sobrenome
    } 
}

console.log (pessoa.nomeinteiro ())

//fazendo a mesma coisa sem retorno abaixo

let pessoa2 = {
    nome: 'joão',
    sobrenome: 'victor',
    nomeinteiro: function (){
        console.log (this.nome + ' ' + this.sobrenome) 
    } 
}

pessoa2.nomeinteiro ()

//This nada mais é que um atalho para um atributo de um objeto. É preciso entender a linguagem americana.
// O this é como se evitasse a repetição do nome, reduzindo assim a frase. 
//Abaixo podemos ver a utilização do bind 

var myButton = {
  content: 'OK',
  click() {
    console.log(this.content + ' clicked');
  }
};

myButton.click();

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton