// 1. 함수를 리턴하는 함수
// aaa를 실행하는순간 결과로 bbb가 나오고, 이 bbb를 실행하려면 aaa함수 옆에 소괄호 하나 더 붙이면 return 하는 bbb에 소괄호 붙이는ㄴ것과 마찬가지
function aaa() {
  const apple = 10;
  return function bbb() {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}
aaa()();
// 어차피 실행하면 내부의 함수 이름은 나오지 않으니 이름 필요없음

// 2. 함수를 리턴하는 함수 -인자를 받아 사용
function aaa1(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}
//   undefined
aaa1(100)(500);
//    500
//    100

// 3.  화살표함수로 만들기.
const aaa2 =
  (apple) =>
  // { // 중괄호롸 retrun사이에 아무것도 없으니 생략가능

  //     return
  (banana) => {
    console.log(banana);
    console.log(apple);
  };
//   }

//   undefined
aaa2(100)(500);
//    500
//   100

//  ==> 생략한것
const aaa3 = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

aaa3(100)(500);

// 4. 인자가 여러개

const ccc = (tomato) => (apple) => (banana) => (orange) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
  console.log(orange);
};
//   undefined
ccc(50)(30)(10)(5);
//    10
//    30
//    50
//    5
