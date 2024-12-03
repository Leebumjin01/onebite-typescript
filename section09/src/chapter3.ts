/**
 * infer
 * -> 조건부 타입 내에서 특정 타입만 추론해올 수 있는 기능
 * -> infer는 "추론 가능한 경우에만" 타입을 결정
 * -> T가 U에 할당 가능해야만 추론이 동작
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // never

type C = ReturnType<number>; // never , 추론 불가

// 예제 2

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string
