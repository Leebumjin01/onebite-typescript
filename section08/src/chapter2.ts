/**
 * keyof 연산자
 */

/*
interface Person {
  name: string;
  age: number;
}

// keyof 연선자를 사용하면, 객체의 프로퍼티가 추가, 수정되더라도 유니온 타입으로 추출할 수 있음
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
    name: "lbj",
    age: 35,
  };
*/

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "lbj",
  age: 35,
};

getPropertyKey(person, "name");
