class ClassInterface{
    msg: string = "hello"
    constructor(msg?:string){

    }
    printMsg(){
        console.log(this.msg);
    }
}

let exampleClassInterface = new ClassInterface('Hello swiecie');
exampleClassInterface.printMsg();

interface Dog {
name:string;
age:number;
color:string;
date?:Date;
}

let Reksio:Dog = ({
    name:"Reksio",
    age:13,
    color:"brown",
})

let json = `{
    "name":"Reksio",
    "age":13,
    "color":"red",
    "rasa":"jamnik"
    }`;

let myDog:Dog = JSON.parse(json)
console.log(Reksio)
console.log(Reksio.name)
console.log(myDog)