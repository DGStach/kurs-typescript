class letConstVar {
  printFunc() {
    let i = 0;
    for (i = 0; i < 5; i++) {
      console.log(i);
    }
  }
}

let exampleLetConstVar = new letConstVar()
exampleLetConstVar.printFunc()