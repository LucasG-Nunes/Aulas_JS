function ativityError(arr,num){
    try{

        if (!arr && num ) throw new ReferenceError("Mensagem invalida");

        if (typeof arr !== "object") throw new TypeError("Tipo não corresponde com o requisitado");
    
        if (typeof num !==  "number") throw new TypeError("Tipo não corresponde com o requisitado");
    
        if (length.arr !== num  ) throw RangeError ("Tamanho invalido");

        return arr;
    }
    catch (e){
        if (e instanceof ReferenceError){
            console.log ("Este é um erro ReferenceError!");
        } else if( e instanceof TypeError){
            console.log( "Este é um erro TypeError!")
        }else{
            console.log("Erro não identificado")
        }
    }

} 

console.log(ativityError());