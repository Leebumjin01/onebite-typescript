/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "lbj",
  profile: {
    nickname: "bamzen",
  },
  urls: ["https://"],
};
let { id, name, profile } = c;

function func(message = "hello") {
  return "hello";
}

// any type의 진화, 암묵적 any type
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFiexd();

const num = 10;
const str = "hello";

// union type 추론
let arr = [1, "string", true];
