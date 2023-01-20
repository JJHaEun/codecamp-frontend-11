// 유틸리티 타입!!
export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string; // 있어도되고, 없어도된다
} // 이 객체의 키를 가지고 유니옴 형태로 만들기.

// 1. Partial 타입 // 정해진 타입 전부 물음표가 적힌 타입으로 바뀌게된다.(있어도되고 없어도되는...)
type aaa = Partial<IProfile>; // aaa라는 타입이 만들어짐. type 만들타입명 => 이렇게 쓰는방식도 타입만드는 방식임

// 2. Required 타입 //정해진 타입 모두가 필수요건인 타입만들기.
type bbb = Required<IProfile>;

// 3. Pick타입 // 정해진 타입중 골라서 만들기
type ccc = Pick<IProfile, "name" | "age">;
// IProfile에서 고른다. name 또는 age로

// 4. Omit 타입 // 정해진 타입중에서 제거한다.
type ddd = Omit<IProfile, "school">;

// 5. Record 타입 // 유니온 타입으로 만듬. Record<유니온 타입의 것들이 키로,정해진 타입이 각각의 value(객체형태로 들어감)로 바뀜
type eee = "철수" | "영희" | "훈이"; // 세개 모두 합친것. => // Union 타입
let child: eee = "철수"; // 유니온 타입은 딱 정해져있어서 그중에 선택하는 것.
let child2: string = "사과"; //, "바나나","딸기" // 어떤 문자열이던지 다 들어갈 수 있음.

type fff = Record<eee, IProfile>; // Record 타입

// export interface IProfile {
//     name: string;
//     age: number;
//     school: string;
//     hobby?: string; // 있어도되고, 없어도된다
//   } // 이 객체의 키를 가지고 유니온 타입 형태로 만들기.

// 6.객체의 키들로 유나온타입 만들기
type ggg = keyof IProfile; //keyof   // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

//  type과 interface 의 차이 => interface는 선언병합 가능.
export interface IProfile {
  candy: number; // 선언병합으로 추가됨.
}

// type 으로 만든것들은 선언병합불가

// 응용하기.
let profile: Partial<IProfile> = {
  // 전부 물음표타입으로 바꾸어 빨간줄을 해결한다.
  age: 23,
};
