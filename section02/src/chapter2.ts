// 배열

// 배열의 타입: 숫자형을 갖는 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "lbj"];

// 제네릭 선언
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: (number | string)[][] = [[1, 2, 3], ["hello"]];

// 튜플

// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1,2,3] -> 에러
// tup1 = ["hello", "hi"] -> 에러

let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플 사용시 배열을 사용할 때, 튜플을 이용해서 값을 잘못 넣지 않도록 알려줌
const users: [string, number][] = [
  ["이정환", 1],
  ["홍길동", 2],
  ["임꺽정", 3],
  ["신사임당", 4],
  // [5, "아무개"],
];
