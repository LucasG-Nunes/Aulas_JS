 //                            THROW                 //

//Diferente de um return que apenas nos retorna a mensagem que queremos entre "" como string

// o throw vai se comportar como um erro verdadeiro da linguagem JS

function verificaPalidromo(){
    if(!string) throw "String invalida";

    return string=== string.split("").reverse('').join('');

}
verificaPalidromo("cat");

//nos retornaria o erro uncaught

//                        Try...catch                //

//o try catch é uma verificação do seu código sendo bem dinamico pois você pode usar o catch para o tratamento do seu erro (um outro bloco) até o deixando mais organizado

function verificaPalidromo(){
    if(!string) throw "String invalida";

    return string=== string.split("").reverse('').join('');

}

function tryCatchExemplo(string){

    try{
        verificaPalidromo(string)
    }
    catch(e){
        console.log(e)
    }
}
tryCatchExemplo(''); // retornaria string invalida sem ""

// catch com Throw :

function verificaPalidromo(){
    if(!string) throw "String invalida";

    return string=== string.split("").reverse('').join('');

}

function tryCatchExemplo(string){

    try{
        verificaPalidromo(string)
    }
    catch(e){
        throw e;
    }
}
tryCatchExemplo(''); //também retornaria string invalida mas com o x apontando o erro e uncaught


// finally instrução chamada independete se tem o erro ou não


function tryCatchExemplo(string){

    try{
        verificaPalidromo(string)
    }
    catch(e){
        throw e;
    }
    finally{
        console.log ("A string enviada foi: " + string)
    }
}
tryCatchExemplo(''); // nos retornaria A string enviada foi:  E logo após, apresentaria o erro. CASO INVALIDA


//                              Criando seu erro pernsalizado (Error)                 //

new Error(message,filename,linenumber)
// todos os parametros são opcionais

const MeuErro = new Error("Mensagem invalida")

throw MeuErro; // retornaria o erro padrão do JS com x e aparecia nossa mensagem determinada

// o erro também pode ser nominado 

const  MeuErro = new Error ("Mensagem invalida");
MeuErro.name = "InvalidMessage" ;

throw MeuErro; // aqui nomeamos o nosso erro e apareceria da seguinte forma no console : nome do erro + mensagem que escolhemos 

