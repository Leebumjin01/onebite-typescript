// any type
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
// 런타임에 오류 발생가능성이 높기 때문에 최대한 사용을 지양
let anyVar: any = 10;

anyVar = "hello";
anyVar = true;

anyVar = {};

anyVar = () => {};

anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}
