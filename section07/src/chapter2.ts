/**타입 변수 응용하기
 *
 */

// 첫번째 사례: a, b의 타입이 다를경우
// 타입 변수를 여러개 사용
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("test", 2);

// 두번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// hello

// 세번째 사례

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10);
