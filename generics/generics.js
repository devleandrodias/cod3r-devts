var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// class generic
var OperationBinary = /** @class */ (function () {
    function OperationBinary(op1, ap2) {
        this.op1 = op1;
        this.ap2 = ap2;
    }
    return OperationBinary;
}());
// console.log(new OperationBinary('Bom', 'Dia').execute());
// console.log(new OperationBinary(3, 7).execute());
// console.log(new OperationBinary(3, 'Batman').execute());
// console.log(new OperationBinary({}, {}).execute());
var SumBinary = /** @class */ (function (_super) {
    __extends(SumBinary, _super);
    function SumBinary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SumBinary.prototype.execute = function () {
        return this.op1 + this.ap2;
    };
    return SumBinary;
}(OperationBinary));
console.log(new SumBinary(3, 4).execute());
