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

function times(x: number, y: number): number {
  return x * y;
}

function sum(x: number, y: number): number {
  return x + y;
}

let calc: (x: number, y: number) => number;

calc = times;
console.log(calc(10, 5));

calc = sum;
console.log(calc(10, 5));

// types for object

let user: { name: string; age: number } = {
  name: "Leandro",
  age: 19,
};

user = { name: "Thaísa", age: 20 };

const beatDot = (time: number) =>
  time <= 8 ? "Ponto normal" : "Fora do horário";

type Collaborator = {
  supervisors: string[];
  beatDot: (hora: number) => string;
};

let collaboratorBeatriz: Collaborator = {
  supervisors: ["João", "Carlos", "Algusto"],
  beatDot(horario: number): string {
    return beatDot(horario);
  },
};

let collaboratorCarlos: Collaborator = {
  supervisors: ["Ana", "Algusto"],
  beatDot(horario: number): string {
    return beatDot(horario);
  },
};

console.log(collaboratorBeatriz.beatDot(7.2));
console.log(collaboratorCarlos.beatDot(7.2));

// union types

let note: number | string = 10;

console.log(`My note is ${note}`);

note = "10";
console.log(`My note is ${note}`);

// check types

let value = 30;

typeof value == "number" ? "isNumber" : "noNumber";

// type never

function getHello(): void {
  console.log("Hello");
}

function error(msg: string): never {
  throw new Error(msg);
}

type ProductType = {
  name: string;
  price: number;
  valid(): void;
};

const product: ProductType = {
  name: "MacBook Air 2018",
  price: -2002.31,
  valid() {
    this.name.trim().length === 0 && error("Name invalid");
    this.price < 0 && error("Prince invalid");
  },
};

// product.valid();

