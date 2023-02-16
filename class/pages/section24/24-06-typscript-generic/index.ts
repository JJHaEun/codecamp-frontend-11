// 1.문자/ 숫자 / 불린타입 (primitive) 타입

import { useState } from "react";

const getPrimitive = (arg: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg];
};
const result = getPrimitive("철수", 123, true);
// 리턴 타입이 있다 => result의 타입 유추 가능

// 2. any타입 => 그냥 자바스크립트랑 같음.
const getAny = (arg: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg * 1000); // 문자가 들어욌던, 숫자가 들어왔던 any라서 모르기에 일단 실행됨.(모든 들어가나 리턴타입알수 없음)
  return [arg3, arg2, arg];
};
const result = getAny("철수", 123, true);
// 타입 유추못함..

// 2. unknown타입
const getUnkown = (arg: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg === "number") console.log(arg * 1000); // 얘는 any와는 다르게 조건이 있지 않으면 에러

  return [arg3, arg2, arg];
};
const result = getAny("철수", 123, true);

// 3. generic타입
// function getGeneric1<Mytype1, Mytype2, Mytype3>(arg: Mytype1, arg2: Mytype2, arg3: Mytype3): [Mytype3, Mytype2, Mytype1] {
// 이런타입사용할거야. => 일단 이렇게 해서 뭐든 넣을 수는 있으나, 일단 한번 넣으면 그 타입으로 고정됨
// function getGeneric2<T, U, V>(arg: T, arg2: U, arg3: V): [V, U, T] {
function getGeneric3<T1, T2, T3>(arg: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg];
}
const result = getGeneric3("철수", 123, true); // 리턴타입을 알 수 있다!!(뭐든 들어가지만)
const result = getGeneric3<string, number, boolean>("철수", 123, true); // 처음부터  타입을 정해주기. 그러면 여기 써준 꺽쇠의 타입이 위쪽 내가만든타입에 들어가게됨

const [state, setState] = useState<string>(""); // 이런식으로 꺽쇠의 타입을 써서 명시적으로 해줄때 사용했었음.

// 라이브러리를 만들어 제공시 => 사용자가 무얼 넣을지 모르니 이때는 제네릭으로 많이 만든다.

// 4. generic타입
const getGeneric4 = <T, U, V>(arg: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg];
};
const result = getGeneric4("철수", 123, true); // 리턴타입을 알 수 있다!!(뭐든 들어가지만)
