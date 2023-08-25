"use strict";
exports.__esModule = true;
exports.PI = exports.Two = exports.One = void 0;
var One = /** @class */ (function () {
    function One() {
    }
    One.prototype.constructr = function () {
        console.log("class one");
    };
    return One;
}());
exports.One = One;
var Two = /** @class */ (function () {
    function Two() {
    }
    Two.prototype.constructr = function () {
        console.log("class two");
    };
    return Two;
}());
exports.Two = Two;
exports.PI = 3.14;
