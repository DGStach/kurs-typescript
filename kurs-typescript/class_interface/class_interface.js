var ClassInterface = /** @class */ (function () {
    function ClassInterface(msg) {
        this.msg = "hello";
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var exampleClassInterface = new ClassInterface('Hello swiecie');
exampleClassInterface.printMsg();
var Reksio = ({
    name: "Reksio",
    age: 13,
    color: "brown"
});
var json = "{\n    \"name\":\"Reksio\",\n    \"age\":13,\n    \"color\":\"red\",\n    \"rasa\":\"jamnik\"\n    }";
var myDog = JSON.parse(json);
console.log(Reksio);
console.log(Reksio.name);
console.log(myDog);
