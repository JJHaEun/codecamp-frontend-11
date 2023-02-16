// 1. HOF -일반함수
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

first(23)("");

// HOF 화살표함수
// prettier-ignore
const first2=<T>(arg1: T)=> 
     <U>(arg2: U): [T, U]=> { // 중괄호화 리턴사이에 아무것도없으면 중괄호롸 리턴 생략하고 소괄호로, 그리고 아무것도 없으면 소괄호도 생략가능
      return [arg1, arg2];
    };

first2(23)("");

// prettier-ignore

const 로그인체크=<C>(Component: C)=> 
     <P>(props: P): [C,P]=> { // 중괄호화 리턴사이에 아무것도없으면 중괄호롸 리턴 생략하고 소괄호로, 그리고 아무것도 없으면 소괄호도 생략가능
      return [Component, props];
    };

const result = 로그인체크(23)("");
