/*
function verificaPalidrome(string){
    if (!string ) return "String inexistente";

    string.split('').reverse().join('')=== string;
}

console.log(verificaPalidrome)(ama))*/


function verificapalidromo2(string){
    if(!string) return "string inexistente"

    for(let i = 0; i<string.length / 2 ; i++){
        if (string[0] !== string[ string.length -1 -i]){
            return false;
        }
    }
    return true;
}