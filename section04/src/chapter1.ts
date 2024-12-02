/**
 * 함수 타입 정의
 */

function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

// const add = (a: number, b: number): number => a + b;
const add = (a: number, b: number) => a + b;

// 필수 매개변수는 선택적 매개변수 뒤에 올 수 없음
function introduce(name = "lbj", tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("lbj", 180);
introduce("lbj");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}
getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
