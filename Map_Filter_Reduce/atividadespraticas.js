const maca = {
    value: 2,
}

const laranja = {
    value:3,
}

function mapComThis(arr,thisArg){
    return arr.map(function(item){
       return item  * this.value
    },thisArg);
}
const num = [1,2];

console.log(mapComThis(num,maca));


function mapSemThis (arr){
    arr.map(function(item){
        return item * 2
    });
}
const arr = [ 2 ,4 , 6 ,8, 10]

console.log(mapSemThis(arr,))



function returnArraysPares(arr){
    return arr.filter(callback)
    
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [ 57,20,2,4,39]



function somaNumeros(arr){
   return arr.reduce(function(prev,current){
        return prev+current;
    })
}

const arr = [1,2]

// return 3 que é a soma dos dois

const lista = [
    {
        nome: 'sabão em pó',
        preco: 30
    },
    {
        nome: 'cereal',
        preco: 10
    },
    {
        nome: 'toalha',
        preço: 20
    }
]
const saldoDisponivel = 100;

function atualizaPreco(arr){
    return lista.reduce(function(prev,current){
        return prev - current.preco
    },saldoDisponivel);
}