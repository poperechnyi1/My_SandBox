type NumberCallBack = (number: number) => any 

class Foo {
  save(callback: NumberCallBack) : void {
      //Выполняем сохранение
      var result : number = 42; //Получаем в ходе операции сохранения некое число
      //Можно ли во время выполнения программы как-то обеспечить то, чтобы коллбэк принимал лишь один параметр типа number?
      callback(result);
  }
}

var foo = new Foo();
var callback: NumberCallBack = (result: number) : void => {
  alert(result);
}
foo.save(callback);