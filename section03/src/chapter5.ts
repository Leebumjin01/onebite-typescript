/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "lbj";
person.age = 35;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "아지",
  color: "brown",
  breed: "시츄",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// 다중 단언, 사용 금지
let num3 = 10 as unknown as string;

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "gray",
} as const;

// cat.name = "";

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "lbj",
};

// 옵셔널 체이닝, ? -> author 프로퍼티가 null 이거나 undefiend 일 수도 있음
// const len: number = post.author?.length;
// ! -> null 이거나 undefined 가 아닐것이라고 단언
const len: number = post.author!.length;
