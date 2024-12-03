/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string

let varB: StringNumberSwitch<string>; // number

// 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined;
// 조건부 타입을 함수의 반환값 타입으로 정의하면 조건에 따라 반환값 타입을 원하는 대로 바꿀 수 있음
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im lbj");
result.toUpperCase();

let result2 = removeSpaces(undefined);