class thisProblem{
    msg:string = 'Witaj Swiecie';
    fun1(){
        return function funInside(){
            console.log(this.msg)
        }
    }
    fun2(){
        return ()=>{
            console.log(this.msg)
        }
    }
}
var exampleThisProblem = new thisProblem();
var firstFun = exampleThisProblem.fun1()
firstFun();

var secFun = exampleThisProblem.fun2()
secFun();
