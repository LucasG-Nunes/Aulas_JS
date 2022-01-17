numberOne = 1;

console.log(numberOne + 2 );

var numberOne;
//-----------------------------------------------------------]
var firstName = "João";
var lastName = "Souza";

if(firstName === "João"){
    var firstName = "Pedro"; //Podemos reatribuir com o var
    let lastName = "Silva"; //Já o let só é chamado caso o console seja no bloco
    
}
console.log(firstName,lastName)
//---------------------------------------------------------
 const FIRST_NAME = "Lucas" ; // const não pode sofrer qualquer alteração no seu valor pois realmente é uma "constante"
 //---------------------------------------------------------

 //                      Estrutura de dados                            //

 //         ---------------  strings --------------

let none = 'João';

let sobrenome = "Pedro";

let concatenado = none.concat(sobrenome) // string mas desse jeito ira sair junto

concatenado = nome + " " + sobrenome // dessa forma ira responder com o espaço desejado

concatenado = nome + "\n" + sobrenome // caso queira que pule para a proxima linha usamos o \n

concatenado.length // vai sair a quantidade de caracteres

concatenado = `${nome} ${sobrenome}` //concatenção com string e variaveis

let exemplo = new String("blablbla") // quando se usa S maiusculo se torna um objeto

let vazio = "" ; // determinamos uma string vazia

let frase = " olá, tudo bem?"

frase.split(" ") //ira retornar uma lista com todas as palavras contidas *obs: utilizamos o espaço como comando *

frase.includes("tudo") // estamos perguntando se a string tudo está contida na variavel

frase.startsWith("R") // estamos perguntando se a frase se inicia com R

frase.endsWith("R") // estamos perguntando se se encerra com R

//para substuir utilizamos o replace, mas apenas utilizar não altera a variavel em si, temos que determinar uma nova variavel para conter a frase atualizada

let novafrase = frase.replace ("Tudo" , "Estais"); // aqui estamos utilizando o replace para substuir tudo para estais

//                                       Numbers                          //

let num = 100;
num + 3;
num - 3;
num * 3;
num / 3;
num % 3;
3 ** 3 ; 

num.toString()// caso eu quisesse converter para string

//também temos a funcionalidade math em JS 

Math.floor(num) // arrendondar para baixo

Math.ceil(num) // arrendondar para cima


//                                      Booleanos                                     //

// Boleanos apenas nos respondem true or false

let validation = 3 ===0 ;


//                                       Arrays                                         //

let array = []

array.push()//adicionar no final do array

array.pop()//vai tirar o ultimo numero do array

array.shift() //vai tirar o primeiro elemento

array.unshift() // vai adicionar como primeiro elemento

for(let i = 0; i< array.length, i++){
    console.log(array[i])
}

//                                 Objetos                            //

let obj = {}  //criando objeto

obj.name = "julia"; // adicionando a key name com seu value julia

obj.age = "20" // adicionando a key age com seu value 20

object.values(obj) // para ver os valores do obj

object.keys(obj) // para ver as chaves(keys)

let object = {
    name: "Lucas",
    Age: 20,                //Também pode ser criado dessa forma
    Adress: "Rua Hercilia T"
}

