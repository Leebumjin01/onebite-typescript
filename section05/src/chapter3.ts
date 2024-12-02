/**
 * 선언 합침
 */

// interface는 동일한 이름으로 중복 선언 가능, 모든 선언이 합쳐짐
interface Person {
  name: string;
}

interface Person {
  // name: number; // 동일한 타입으로 선언 해야함
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 35,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
