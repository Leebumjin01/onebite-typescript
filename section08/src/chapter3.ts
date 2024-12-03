/**
 * 맵드 타입
 * -> interface 에서는 사용불가, 타입 별칭에서만 사용
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // 맵드 타입 문법
  // ? -> 맵드 타입이 정의하는 프로퍼티가 전부 선택적 프로퍼티가 됨
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  // 객체 타입에서 객체의 키 값들을 숫자나 문자열 리터럴 유니언을 생성
  // -> 오른쪽의 객체 타입으로부터 프로퍼티의 키들을 유니언 타입으로 반환
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 불러오는 기능
  return {
    id: 1,
    name: "lbj",
    age: 35,
  };
}

/*
// readonly 로 변경 불가
const user = fetchUser()
user.id = 2;
*/

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "lbj",
  age: 36,
});
