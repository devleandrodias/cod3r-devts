function echo(object: any) {
  return object;
}

console.log(echo("João"));
console.log(echo(20));
console.log(echo({ name: "João", age: 20 }));

function genericEcho<T>(object: T): T {
  return object;
}

console.log(genericEcho("Lendro").length);
console.log(genericEcho<number>(20).valueOf);
console.log(
  genericEcho<{ name: string; age: number }>({
    name: "Leandro",
    age: 20,
  }).name.toUpperCase()
);
