/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

// 추가 프로퍼티가 있는 객체가 슈퍼 타입이 되는것이 아님
type Dog = {
  name: string;
  color: string;
  breed: string;
};

// 슈퍼 타입
let animal: Animal = {
  name: "기린",
  color: "yellow",
};

// 서브 타입
let dog: Dog = {
  name: "아지",
  color: "brown",
  breed: "시츄",
};

// 업 캐스팅
animal = dog;

// 다운 캐스팅
// dog = animal; // 에러

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react",
};

// 업 캐스팅
book = programmingBook;

// 다운 캐스팅
// programmingBook = book; // 에러

/*
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "react",
};

function func(book: Book) {
  func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "react"
  });
  func(programmingBook);
}
