//                             DOM X BOM                 //


// DOM document object model como acessar e modificar elementos HTML de uma página

//BOM browser object model tudo que está dentro do objeto window

 /*                            Metodos              */ 
  
 // selecionamos as partes desejadas utilizado suas referencias ID ou CLASS
 // Para id document.getelementbyid 
 // Para class  document.getelementbyclassname
 // Para tag document.getelementbytagname("li")
 // document.queryselectorall("li .opção") vai nos retornar um array que em li tenha opção

 //meuElement.classlist.add("novo-estilo")
 //meuElement.classlist.remove("classe")
 //meuElement.classlist.toggle("Darkmode") caso o toggle perceba q n temos a classe dark mode ira adicionar, caso tenhamos ele ira retirar (parece um interruptor)

 //document.getelementsbytagname("x").style.color ="blue"  adicionando css direto pelo JS


//Eventos do mouseouver e mouseout
// click dbclick
// change,load
//botao.addeventlistener("click",outrafuncao)