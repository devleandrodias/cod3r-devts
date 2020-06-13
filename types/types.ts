const a: string = "String..."; // type: string
const b: number = 150; // type: number
const c: boolean = true; // type: boolean
const d: Array<string> = ["Name1", "Name2"]; //type: Array

// tipos explicitos

let minhaIdade: number;

minhaIdade = 19;
console.log(typeof minhaIdade);

// minhaIdade = "19 anos";
// console.log(typeof minhaIdade);

// tipo array

let arrayHobbies: string[] = ["Cozinhar", "Tocar piano", "Programar"];

console.log(arrayHobbies);
console.log(arrayHobbies[0]);
console.log(typeof arrayHobbies);

arrayHobbies.push("Qualquer string");

// tupla: é um array de tipos de uma quantidade pré-definida de tipos

let endereco: [string, number, number] = ["Av. Principal", 90, 14300222];
endereco = ["Av. Dom bosco", 123, 12345321];

console.log(endereco);

// enum: enumerações

enum DiasSemanads {
  SEG = "Segunda-feira",
  TER = "Terça-feira",
  QUA = "Quarta-feira",
  QUI = "Quinta-feira",
  SEX = "Sexta-feira",
  SAB = "Sábado",
  DOM = "Domingo",
}

console.log(DiasSemanads.QUI);

// type: any
let carro: any = "BMW";
console.log(carro);

carro = { marca: "BMW", ano: 2020 };
console.log(carro);

// type for functions

function returnMyName(name: string): string {
  return `My name is ${name}`;
}

function multiplicar(x: number, y: number): number {
  return x * y;
}

function somar(x: number, y: number): number {
  return x + y;
}

let calc: (x: number, y: number) => number;

calc = multiplicar;
console.log(calc(10, 5));

calc = somar;
console.log(calc(10, 5));
