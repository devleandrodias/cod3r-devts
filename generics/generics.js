function echo(object) {
    return object;
}
console.log(echo("João"));
console.log(echo(20));
console.log(echo({ name: "João", age: 20 }));
function genericEcho(object) {
    return object;
}
console.log(genericEcho("Lendro").length);
console.log(genericEcho(20).valueOf);
console.log(genericEcho({
    name: "Leandro",
    age: 20
}).name.toUpperCase());
