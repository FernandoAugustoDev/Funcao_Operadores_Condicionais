/*
Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

- nome;
- nota da primeira prova;
- nota da segunda prova.

*/ 

let students = [
    {
        name: 'Joao',
        firtNote: 7,
        secondNote: 5,
    },
    {
        name: 'Leiticia',
        firtNote: 10,
        secondNote: 9.5,
    },
    {
        name: 'Diego',
        firtNote: 9,
        secondNote: 9,
    },
    {
        name: 'Julia',
        firtNote: 6,
        secondNote: 4.5,
    },
];

function average (n1, n2){
    return ((n1 + n2) / 2).toFixed(1);
}

function printStudentsAverage(student){
    let mensageAverage;
    if(average(student.firtNote, student.secondNote) >= 7 ){
        mensageAverage = `A média do(a) aluno(a) ${student.name}: ${average(student.firtNote, student.secondNote)} \nParabens, ${student.name}! Voce foi aprovado(a) no Concurso`;
    }else{
        mensageAverage = `A média do(a) aluno(a) ${student.name}: ${average(student.firtNote, student.secondNote)} \nNão foi dessa vez, ${student.name} tente novamente!`;
    }
    return mensageAverage;
}

for(let student of students){
    alert(printStudentsAverage(student));
}