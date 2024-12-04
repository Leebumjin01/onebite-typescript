/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pck<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | content extends 'title' | 'tags' | 'content' | 'thumbnail' -> true
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<post, Exclude<keyof Post, 'title'>>
// -> Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL' , 'title'>>
// -> Pick<Post, 'content' | 'tags' | 'thumbnailURL' >

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * -> 동일한 패턴을 갖는 객체 타입을 쉽게 정의할 수 있음
 */

/*
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};
*/

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
