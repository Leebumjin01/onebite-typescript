/**
 * unknown type
 */

function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운 캐스팅, 에러 발생 됨
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// never type

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅
  // let never1: never = 10;
  // let never2: never = "string";
  // let nerver3: never = true;
}

/**
 * void type
 */

// 업 캐스팅
function voidExam() {
  function voidFunc() {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/*
 * any type : 치트키임, 타입 계층을 무시하는 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // 유일하게 캐스팅이 안됨
  // never type은 순수한 공집합 타입이기 때문에 캐스팅 불가함
  // neverVar = anyVar;
}
