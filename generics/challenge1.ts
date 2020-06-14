class Fila<T extends number | string> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T): void {
    this.fila.push(elemento);
  }

  proximo(): null | T {
    if (this.fila.length > 0 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    } else {
      return null;
    }
  }

  imprimir(): void {
    console.log(this.fila);
  }
}

const fila = new Fila<string>('Leandro', 'Thaísa', 'Beatriz');

fila.imprimir();
fila.entrar('Guilherme');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
