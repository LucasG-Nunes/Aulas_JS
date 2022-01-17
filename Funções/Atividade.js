/*const alunos = [
    {
    nome: "Lucas",
    nota: 4,
    turma: "1B"

    },
    {
    nome: "Gabriel",
    nota: 6,
    turma: "2C"
    },
    {
    nome: "Flávia",
    nota: 7,
    turma: "2C"
    }
]

function alunosAprovados(arr,media){
    let aprovados= [] ;



    for (let i = 0; i < arr.length; i++){

        const {nome,nota} = arr[i];


        if (nota >= media ){
            aprovados.push(nome)
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos,5));*/


function calculaAnos(anos){
    return `Daqui há ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade`
}

const pessoa1= {
    nome:" Gabriel",
    idade: 30
}
const pessoa2= {
    nome:" Gabriela",
    idade: 20
}
const pessoa3= {
    nome:" Sophia",
    idade: 15
}
console.log( calculaAnos.call(pessoa2,30));