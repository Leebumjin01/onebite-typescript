// object

// 객체 리터럴
let user: {
  id?: number; // 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: "lbj",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "아지",
  color: "brown",
};

user.id;
dog.name;

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "myapikey",
};

// config.apiKey = "asdqwd"; // readonly 키워드로 프로퍼티의 값을 바꾸는걸 방지
