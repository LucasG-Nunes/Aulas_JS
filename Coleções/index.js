const myMap = new Map()


myMap.set("apple", "fruit"); // o comando no map para adicionar uma chave e valor é set

myMap.get("apple"); // o comando para buscar uma value é get (nessa situação irá nos retornar fruit)

myMap.delete("apple") // o comando para deletar alguma key é o delete nos retornando true para confirmar

myMap.get("apple") // se eu der um get após deletar ela irá nos retornar undefined

// SET

const myArray = [1,1,2,2,3,3,4,4];

const mySet = new Set(myArray); // caso eu utilizasse o set nessa situação do array ele apenas nos retornariam os valores sem repetir pois não é possivel repetir nesse método

const mySet = new Set();

mySet.add(1);
mySet.add(2);  // para adicionar

mySet.has(1); // verificar se tem esse valor no set

mySet.has(3);

mySet.delete(5) // para deletar

