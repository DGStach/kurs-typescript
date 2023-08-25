class exampleFunctions {
    msg: string = "Hello świecie"
    showMsg():void{
        console.log(this.msg);
    
    }
    hello():string{
        return 'Hello swiecie, funkcja'
    }
    
    hello1(message: string){
        console.log(message)
    }
    hello2(message:string, message2?:string){
        console.log(message, " ", message2);
    }
    hello3(message:string, message2="Hello with = "){
        console.log(message, " ", message2);
    }
    hello4 = message => console.log(" HELLO4" + message)
    hello5 = () => console.log("wywietlam funcje anonimowa przypisana do zmiennej hello5")
    hello6 = (message:string) => console.log(message)
    hello7 = (message?:string):string => {console.log("Hello7"); return 'witaj funkcja 7'}

}

var example = new exampleFunctions();
// example.showMsg()
// example.hello()
// example.hello1("ywswietlam funkcje ")
// example.hello2("ywswietlam funkcje Hello 2", "parametr 2")
// example.hello3("ywswietlam funkcje Hello 2")
//example.hello4("przekazana wartość w parametrze message")
//example.hello6("witaj funcja 6");
example.hello7();



