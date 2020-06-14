/**
 * Desafio Mapa
 *
 * Array de objetos (Chave / Valor) => Item
 * Métodos obter(chave), colocar(chave, valor)
 * limpar(), imprimir()
 */
var Mapa = /** @class */ (function () {
    function Mapa() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.valores = args;
    }
    Mapa.prototype.obter = function (chave) {
        var valor = this.valores.filter(function (item) { return item.chave === chave; });
        if (valor) {
            return valor;
        }
        else {
            return null;
        }
    };
    Mapa.prototype.colocar = function (element) {
        this.valores.push(element);
    };
    Mapa.prototype.limpar = function () { };
    Mapa.prototype.imprimir = function () {
        console.log(this.valores);
    };
    return Mapa;
}());
var mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Leandro' });
mapa.colocar({ chave: 2, valor: 'Thaísa' });
mapa.imprimir();
mapa.obter(2);
