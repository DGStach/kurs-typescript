var exampleFunctions = /** @class */ (function () {
    function exampleFunctions() {
        this.msg = "Hello świecie";
        this.hello4 = function (message) { return console.log(" HELLO4" + message); };
        this.hello5 = function () { return console.log("wywietlam funcje anonimowa przypisana do zmiennej hello5"); };
        this.hello6 = function (message) { return console.log(message); };
        this.hello7 = function (message) { console.log("Hello7"); return 'witaj funkcja 7'; };
    }
    exampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    exampleFunctions.prototype.hello = function () {
        return 'Hello swiecie, funkcja';
    };
    exampleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    exampleFunctions.prototype.hello2 = function (message, message2) {
        console.log(message, " ", message2);
    };
    exampleFunctions.prototype.hello3 = function (message, message2) {
        if (message2 === void 0) { message2 = "Hello with = "; }
        console.log(message, " ", message2);
    };
    return exampleFunctions;
}());
var example = new exampleFunctions();
// example.showMsg()
// example.hello()
// example.hello1("ywswietlam funkcje ")
// example.hello2("ywswietlam funkcje Hello 2", "parametr 2")
// example.hello3("ywswietlam funkcje Hello 2")
//example.hello4("przekazana wartość w parametrze message")
//example.hello6("witaj funcja 6");
example.hello7();
