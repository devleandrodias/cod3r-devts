function echo(object) {
    return object;
}
console.log(echo('João'));
console.log(echo(20));
console.log(echo({ name: 'João', age: 20 }));
function genericEcho(object) {
    return object;
}
console.log(genericEcho('Lendro').length);
console.log(genericEcho(20).valueOf);
console.log(genericEcho({
    name: 'Leandro',
    age: 20
}).name.toUpperCase());
var cellphones = [112112, 1231231, 123412];
cellphones.push(1231412);
console.log(cellphones);
function genericPrint(args) {
    args.forEach(function (element) { return console.log(element); });
}
genericPrint([10, 12, 14, 234, 123, 1541]);
genericPrint(['Leandro', 'Thaísa', 'Rhaira', 'João', 'Carlos']);
genericPrint([
    { name: 'Leandro', age: 20 },
    { name: 'Thaísa', age: 20 },
]);
var callEcho = genericEcho;
console.log(callEcho('Generic'));
