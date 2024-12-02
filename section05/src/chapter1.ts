/**
 * 인터페이스
 */

interface Person {
  name: string;
  age?: number;
  // sayHi: () => void;

  // 호출 시그니처
  sayHi(): void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "lbj",
  sayHi: function () {
    console.log("HI");
  },

  // age: 35,
};

person.sayHi();
person.sayHi(1, 2);
