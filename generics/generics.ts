function echo(object: any) {
  return object;
}

console.log(echo('João'));
console.log(echo(20));
console.log(echo({ name: 'João', age: 20 }));

function genericEcho<T>(object: T): T {
  return object;
}

console.log(genericEcho('Lendro').length);
console.log(genericEcho<number>(20).valueOf);
console.log(
  genericEcho<{ name: string; age: number }>({
    name: 'Leandro',
    age: 20,
  }).name.toUpperCase()
);

const cellphones: Array<number> = [112112, 1231231, 123412];

cellphones.push(1231412);

console.log(cellphones);

function genericPrint<T>(args: T[]): void {
  args.forEach((element) => console.log(element));
}

genericPrint<number>([10, 12, 14, 234, 123, 1541]);
genericPrint<string>(['Leandro', 'Thaísa', 'Rhaira', 'João', 'Carlos']);

genericPrint<{ name: string; age: number }>([
  { name: 'Leandro', age: 20 },
  { name: 'Thaísa', age: 20 },
]);

// type function generic

type CallEcho = <T>(data: T) => T;

const callEcho: CallEcho = genericEcho;

console.log(callEcho<string>('Generic'));
