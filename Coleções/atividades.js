
/*function getAdmin(map){
let arrayAdmins = [];

     for([key,value] of map){
       if(value === "Admin"){
            arrayAdmins.push(key) ;
         }
      }
      return arrayAdmins;
}


const myMap = new Map();
myMap.set("Gabriel", "Admin");
myMap.set("Gabriela", "Admin");
myMap.set("Sophia", "User");

console.log(getAdmin(myMap));*/

const meuArray = [ 1,1,2,2,3,3,4,4];

function valoresUnicos(){
    const mySet = new Set(meuArray);

    return [...mySet];
}
console.log(valoresUnicos(meuArray))
