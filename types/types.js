var a = "String..."; // type: string
var b = 150; // type: number
var c = true; // type: boolean
var d = ["Name1", "Name2"]; //type: Array
// tipos explicitos
var minhaIdade;
minhaIdade = 19;
console.log(typeof minhaIdade);
// minhaIdade = "19 anos";
// console.log(typeof minhaIdade);
// tipo array
var arrayHobbies = ["Cozinhar", "Tocar piano", "Programar"];
console.log(arrayHobbies);
console.log(arrayHobbies[0]);
console.log(typeof arrayHobbies);
arrayHobbies.push("Qualquer string");
// tupla: é um array de tipos de uma quantidade pré-definida de tipos
var endereco = ["Av. Principal", 90, 14300222];
endereco = ["Av. Dom bosco", 123, 12345321];
console.log(endereco);
// enum: enumerações
var DiasSemanads;
(function (DiasSemanads) {
    DiasSemanads["SEG"] = "Segunda-feira";
    DiasSemanads["TER"] = "Ter\u00E7a-feira";
    DiasSemanads["QUA"] = "Quarta-feira";
    DiasSemanads["QUI"] = "Quinta-feira";
    DiasSemanads["SEX"] = "Sexta-feira";
    DiasSemanads["SAB"] = "S\u00E1bado";
    DiasSemanads["DOM"] = "Domingo";
})(DiasSemanads || (DiasSemanads = {}));
console.log(DiasSemanads.QUI);
// type: any
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2020 };
console.log(carro);
// type for functions
function returnMyName(name) {
    return "My name is " + name;
}
function times(x, y) {
    return x * y;
}
function sum(x, y) {
    return x + y;
}
var calc;
calc = times;
console.log(calc(10, 5));
calc = sum;
console.log(calc(10, 5));
// types for object
var user = {
    name: "Leandro",
    age: 19
};
user = { name: "Thaísa", age: 20 };
var beatDot = function (time) {
    return time <= 8 ? "Ponto normal" : "Fora do horário";
};
var collaboratorBeatriz = {
    supervisors: ["João", "Carlos", "Algusto"],
    beatDot: function (horario) {
        return beatDot(horario);
    }
};
var collaboratorCarlos = {
    supervisors: ["Ana", "Algusto"],
    beatDot: function (horario) {
        return beatDot(horario);
    }
};
console.log(collaboratorBeatriz.beatDot(7.2));
console.log(collaboratorCarlos.beatDot(7.2));
// union types
var note = 10;
console.log("My note is " + note);
note = "10";
console.log("My note is " + note);
// check types
var value = 30;
typeof value == "number" ? "isNumber" : "noNumber";
// type never
function getHello() {
    console.log("Hello");
}
function error(msg) {
    throw new Error(msg);
}
var product = {
    name: "MacBook Air 2018",
    price: -2002.31,
    valid: function () {
        this.name.trim().length === 0 && error("Name invalid");
        this.price < 0 && error("Prince invalid");
    }
};
product.valid();
