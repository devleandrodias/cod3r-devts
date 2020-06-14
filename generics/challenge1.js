var Fila = /** @class */ (function () {
    function Fila() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.fila = args;
    }
    Fila.prototype.entrar = function (elemento) {
        this.fila.push(elemento);
    };
    Fila.prototype.proximo = function () {
        var primeiro = this.fila[0];
        this.fila.splice(0, 1);
        return primeiro;
    };
    Fila.prototype.imprimir = function () {
        console.log(this.fila);
    };
    return Fila;
}());
var fila = new Fila('Leandro', 'Thaísa', 'Beatriz');
fila.imprimir();
fila.entrar('Guilherme');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
