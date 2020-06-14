/**
 * Desafio Mapa
 *
 * Array de objetos (Chave / Valor) => Item
 * Métodos obter(chave), colocar(chave, valor)
 * limpar(), imprimir()
 */

type ChaveValor<C, V> = { chave: C; valor: V };

class Mapa<C extends number, V extends number | string> {
  valores: Array<ChaveValor<C, V>> = new Array<ChaveValor<C, V>>();

  obter(chave: C): ChaveValor<C, V> | null {
    const valor = this.valores.filter((item) => item.chave === chave);

    return valor ? valor[0] : null;
  }

  colocar(elemento: ChaveValor<C, V>) {
    const encontrado = this.obter(elemento.chave);

    !encontrado
      ? this.valores.push(elemento)
      : (encontrado.valor = elemento.valor);
  }

  limpar() {
    this.valores = new Array<ChaveValor<C, V>>();
  }

  imprimir() {
    console.log(this.valores);
  }
}

const mapa = new Mapa<number, string>();

mapa.colocar({ chave: 1, valor: 'Leandro' });
mapa.colocar({ chave: 2, valor: 'Thaísa' });
mapa.imprimir();
mapa.obter(2);
mapa.limpar();
mapa.imprimir();
