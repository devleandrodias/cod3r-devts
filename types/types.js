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
