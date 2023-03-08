import { add } from "../../pages/section33/33-01-jest";

it("더하기 잘  되는지 테스트 해보기", () => {
  const result = add(5, 7);
  expect(result).toBe(12); // result가 11이 맞니?
});

// describe("나만의 테스트 그룹 만들기",()=>{
//     it("더하기테스트",()=>{

//     })
//     it("빼기테스트",()=>{

//     })
//     it(("곱하기 테스트"),()=>{

//     })
// })// 겁증등을 할때 이런식으로 붂어서 검증함.
