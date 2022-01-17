const array = [1,2,3,4,5];

array.map((item) => item * 2); // retorno: [2,4,6,8,10];

//forEacg

const array = [ 1,2,3,4,5];

array.forEach((item) => item * 2); //retorno: undefined  para resultar em algo teria que colocar uma constante


//                            Filter                          //

array.filter(callback, thisArg)

const frutas = [ "maçã fuji", "maçã verde ", "laranja ", "abacaxi"];

frutas.filter((fruta) => fruta.includes ("maçã"))

//retorno : ["maçã fuji" , "maçã verde"];


//                           Reduce                            //

array.reduce(callbackFn, initialValue)

const callbackFn = function (accumulator, currentValue, index, array){
    // do something
}
array.reduce(callbackFn,initialValue)