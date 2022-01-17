//                     Função Anôniima           ///


//Função sem ter um nome declarado como o exemplo a seguir


const soma = function (a,b){ 
    return a+b;

}

soma (1,2) // 3


// ----------------------------------------------------------//

//                    Função autoinvocável    ////

// Função também podendo ser anonima, entre parênteses, seguida por outro par de parênteses qe representa sua chamada

(
    function() {
        let name = "Digital innovation one"
        return name;

    }
)();

(
    function(a,b){
        return a+b;  //Também pode ser utilizada com parâmetros ou armazenada em uma variavel
    }
)(1,2);

//                     Callbacks                ///

// Apenas uma função que é passada como argumento para uma outra função 

const calc = function (operacao , num1 , num2){
    return operacao (num1,num2);
}
const soma = function (num1, num2){
    return num1+num2;
}
const subtracao = function(num1,num2){
    return num1-num2;
}

const resultadoSom = calc(soma,1,2)
const resultadoSub = calc(subtracao,1,2)

console.log(resultadoSom);
console.log(resultadoSub);

///                     Arrays e Objetos                ///

// spread: forma de lidar separadamente com MediaElementAudioSourceNode

function sum(x,y,z){
    return x+y+z;
}
const numbers = [1,2,3];

console.log(sum(...numbers)); // ao adicionar esses 3 pontinhos se considera como cada elemento um parametro


//Rest: combina os argumentos em um Array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho() // tanabho vai ser 0
confereTamanho(1,2) // tamanho vai ser 2
confereTamanho(3,4,5) // tamanho vai ser 3

//                          Object Destructuring                 //

const user = {
    id = 42,
    diplayName: "José",
    fullName: {
        firstName: "Lucas",
        lastName: "Gabriel"
    }

};
function userId({id}){
    return id;
}

function getfullName({fullName: {firstName:first , lastName: last}}) {
    return `${first} ${last}`;
}

userId(user) // 42

getfullName(user)
// Lucas Gabriel


//                    loops                //

function numeroPositio(num){
    if (num<0){
        resultado = false;
    }else{
        resultado = true;
    }
    return resultado;
}

// or 

function numeroPositivo(num){
    if (num<0){
        return false;
    }
    return true;
}



//switch case quando tem muitas verificacoes
//sempre precisa de um default
function getAnimal (id) {
    switch(id){
        case 1:
            return "cão"
        case 2:
            return "Passaro"
        case 3:
            return "Cavalo"
        case 4:
            return "Peixe"
        default:
            return "Opção invalida, insira uma opção válida"
    }
}

// For e While

function multiplicaDois(arr){
    let multiplicados = [];

    for (let i = 0; i < arr.length; i++ ){
        multiplicados.push(arr[i]*2);
    }
    return multiplicados;
}
const meusNumeros = [2,32,456,356,40];

multiplicaDois(meusNumeros);

// [4,64,912,712,80]


// for in para objetos

function verificaObjeto(obj){
    for(prop in obj){
        console.log(prop)
    }
}
const meuObjeto = {
    name: 'Lucas',
    age: 20,
    Cidade: "Recife"
}

verificaObjeto(meuObjeto); // resultaria em : nome | age | cidade



// para pegar o valor de cada propriedade

function getValues(obj){
    for (prop in obj){
        console.log(obj[prop]);

    }
}
const meuObjeto = {
    name: 'Lucas',
    age: 20,
    Cidade: "Recife"
}

getValues(meuObjeto); // resultaria em Lucas| 20 | Recife

//for of

function logNumbers(nums){
    for(numbers of nums){
        console.log (numbers);
    }
}

const numbers = [30,20,223,2];

logNumbers(numbers);

/*
30
20
233
2
*/

// while

function exemplowhile() {
    let num = 0

    while (num <= 5 ){
        console.log(num);
        num++;
    }
}
exemplowhile()
/*0
1
2
3
4
5
*/

//do while

function exemploDoWhile() {
    let num = 0;

    do{
        console.log(num);
        num++;
    }while (num <=5)
}
exemploDoWhile()
/*
0
1
2
3
4
5
*/

//                         This                 //

const object = {
    firstname: "Lucas",
    lastname:"Gabriel",
    id:43,
    age:20,
    fullName: function(){
        return this.firstname + " " + this.lastname;
    },
    getId: function(){
        return this.id;
    }
}

object.fullName();
// "Lucas Gabriel"

object.getId();
// 43


//                             Manipulando valor do This                     //

const pessoa = {
    nome = "Murphy";

}
const animal = {
    nome = "Elizabeth"
}
function getSomething(){
    console.log(this.nome);
}

getSomething(animal);

// se eu especificar qual a constante, ela vai me responder o nome correto


const myObj = {
    num1: 2;
    num2: 4;

}
function soma (a,b){
    console.log(this.num1+this.num2 + a + b);
}

soma.call(myObj,1,5)


// Bind clona a estrutura da função e vai utilizar o valor de this e vai ser agora o objeto  que eu determinar

const retornaNomes = function(){
    return this.name;
};

let bruno = retornaNomes.bind({ Name: Bruno});


//                                    Arrow functions              //

// quando se tem apenas uma linha de arrow não precisa se prender as chaves e o return
// Pessoalmente, achei bem limitado por suas restrições
const soma= (a,b) = () => a+b;

soma(1,2);
// 3