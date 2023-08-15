interface IEvent {}
interface ISimpleEvent extends IEvent {}
interface IComplexEvent extends IEvent {}
class T implements ISimpleEvent {}
class D implements IComplexEvent {}

function isIComplexEvent(exemple: IEvent): IComplexEvent {
  return exemple instanceof D;
}

function processEvent(event: IEvent) {
  if (isIComplexEvent(event)) {
    // do something complex }
    console.log("Yes");
  } else {
    // do something simple
    console.log("No");
  }
}

let e: D = new D();

interface A {
  prop1: {
    number: "number";
    string: "string";
  };
}

function someFunc(k: A["prop1"]): void {
  console.log("Fuck the system");
}
