/**
 * 프로미스
 * -> Promise는 제네릭 클래스를 기반으로 타입이 선언되어있기 때문에,
 * -> 타입변수로 비동기 처리의 결과 값을 정의해줄 수 있지만, 실패했을 때의 타입변수를 정의 할 수 없음
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("... 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
