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
var usuario = {
    name: "Leandro",
    age: 19
};
usuario = { name: "Thaísa", age: 20 };
var funcionario;
funcionario = {
    supervisore: ["João", "Carlos", "Algusto"],
    baterPonto: function (horario) {
        return horario <= 8 ? "Ponto normal" : "Fora do horário";
    }
};
console.log(funcionario.baterPonto(7.2));
