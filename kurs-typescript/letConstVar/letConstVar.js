var letConstVar = /** @class */ (function () {
    function letConstVar() {
    }
    letConstVar.prototype.printFunc = function () {
        var i = 0;
        for (i = 0; i < 5; i++) {
            console.log(i);
        }
    };
    return letConstVar;
}());
var exampleLetConstVar = new letConstVar();
exampleLetConstVar.printFunc();
