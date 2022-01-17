//                             Assincrono x Sincrono 

// Assincrono pode fazer uma coisa enquanto faz outra, já o sincrono tem que finalizar a primeira tarefa para fazer outra e assim sequencialmente


//                             Promises

/* inicialmente seu valor é desconhecido então ela pode ser resolvida .then() ou rejeitada .catch() */








//                             Apis e Fetch                  //

/*intermediar o back end com o apresentado no front end
conseguimos acessar por meio de urls

muito comum que APIs retornem seus dados no formato .json
*/

 fetch(url,options)
 .then(response=> response.json()) // convertendo para json para usarmos dentro do JS
 .then(json => console.log(json))

//retorna um promise

// Operações no banco (POST,GET,PUT,DELETE,ETC)

fetch("https://endereco-api.com",{
    method:"GET",
    cache:"no-cache",

})  
    .then(response => response.json())
    .then(json => console.log(json))

    // retorna uma promise

    

// metodo POST    
    fetch("https://endereco-api.com",{
    method:"POST",
    cache:"no-cache",
    body: JSON.stringify(data)

})  
    .then(response => response.json())
    .then(json => console.log(json))


