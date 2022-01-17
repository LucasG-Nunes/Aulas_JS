class contaBancaria{
    constructor( Agencia, numero , tipo, saldo){
        this.Agencia = Agencia;
        this.numero= numero;
        this.tipo = tipo;
        this._saldo = saldo;

    }

    get saldo (){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }
    

    sacar (valor ){
        if(valor >this._saldo){
            this._saldo = this._saldo - valor;
        }

    }


    depositar (valor ){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends contaBancaria{
    constructor (Agencia, numero , saldo,cartaoCredito) {
    super (Agencia, numero , saldo);
    this.tipo = "corrente";
    this.cartaoCredito = cartaoCredito;
}

get cartaoCredito(){
    return this._cartaoCredito
}

set cartaoCredito(valor){
    this._cartaoCredito= valor;
}
}



class ContaPoupanca extends contaBancaria{
    constructor (Agencia, numero ) {
    super (Agencia, numero );
    this.tipo = "poupança";

}
}

class Contauniv extends contaBancaria{
    constructor (Agencia, numero ) {
    super (Agencia, numero );
    this.tipo = "universitaria";
}

sacar(valor){
    if (valor> 500){
        return "operação negada!"
    }
    this._saldo = this._saldo - valor;
}
}
