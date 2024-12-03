/**
 * 제네릭
 */

// 제네릭 함수
// 함수의 인수에 따라 반환값의 타입을 가변적으로 정할 수 있음
// <T> -> 타입 변수, 타입을 저장하는 변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

// 튜플
let arr = func<[number, number, number]>([1, 2, 3]);
