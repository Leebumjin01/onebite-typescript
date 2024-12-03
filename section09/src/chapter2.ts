/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 타입 변수에 유니온 타입을 할당하면 아래 처럼 분리가 됨
// StringNumberSwitch<number>
// StringNumberSwitch<string>
// 분리된 유니온은 | 으로 결합이 됨
// -> 결과 -> let c: string | number

/**
 * 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계 -> 분산
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계 -> 과정
// number extends string ? never : T -> T -> T = number 결과: number
// string extends string ? never : T -> never -> T = never 결과: never
// boolean extends string ? never : T -> T -> T = boolean 결과: boolean

// 결과
// number | never | boolean
// -> never 는 공집합
// 최종 결과: -> number | boolean

/**
 * Exclude 와 반대의 예제
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// number extends string ? T : never -> never
// string extends string ? T : never -> string
// boolean extends string ? T : never -> never

// 결과
// never | string | never
// -> never는 공집합, string
