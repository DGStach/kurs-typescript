var thisProblem = /** @class */ (function () {
    function thisProblem() {
        this.msg = 'Witaj Swiecie';
    }
    thisProblem.prototype.fun1 = function () {
        return function funInside() {
            console.log(this.msg);
        };
    };
    thisProblem.prototype.fun2 = function () {
        var _this = this;
        return function () {
            console.log(_this.msg);
        };
    };
    return thisProblem;
}());
var exampleThisProblem = new thisProblem();
var firstFun = exampleThisProblem.fun1();
firstFun();
var secFun = exampleThisProblem.fun2();
secFun();
