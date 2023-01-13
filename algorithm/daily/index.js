// 003. 배열의 선언과 할당
// 주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.
const fruits = ["사과", "바나나", "파인애플"];

// 또다른 풀이
const fruits = [];
fruits.push("사과");
fruits.push("바나나");
fruits.push("파인애플");

// ** 좋지 않은 풀이 ==> 인덱스로 데이터 삽입시, 해당 데이터를 변경할 수 있음.
const fruits = [];
fruits[0] = "사과";
fruits[1] = "바나나";
fruits[2] = "파인애플";

// ========================================

// 004. 배열의 기능
// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.
const fruits = ["사과", "바나나", "파인애플"];
const newFruits = [];
newFruits.push(fruits[fruits.length - 1]);

// 또다른 풀이
const fruits = ["사과", "바나나", "파인애플"];
const newFruits = [];
newFruits.push(fruits[2]); // 마지막 요소인 파인애플을 꺼내옴.(하드코딩)

// ========================================

// 005. 배열의 기능
// 학생들의 이름이 담긴 students 배열이 있습니다.
// 배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.

let students = ["철수", "영희", "훈이", "짱구", "유리"];

const students1 = students.slice(0, 3);
// ========================================

// 006. 배열의 기능
// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.
let fruits = ["사과", "바나나"];

fruits = fruits.map((el) => "맛있는 " + el);

// ========================================

// 008. 객체의 선언과 할당
// 주어진 student 객체에
// 'name'이라는 키를 만들고, "철수"를 할당하세요.
const student = {};
student.name = "철수";
// 대괄호 방법
const student = {};
student["name"] = "철수";
// 대괄호의 경우 변수가 들어올 수 잇다.
const name = "name3";
student[name] = "철수"; // 이렇게되면 name이라는 변수에 들어있는 name3이 키명이 되어 객체에 추가됨

// ========================================

// 009. 객체의 키&값 추가
// student와 school 두 개의 객체가 있습니다.
// student 객체에 school이라는 객체를 할당해야 합니다.
const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student.school = { ...school };

// 다른 풀이
const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};
student.school = {};
student.school.name = school.name;
student.school.teacher = school.teacher;

// 각각 따로 넣어주지 않고 통채로 넣어주는 방법
const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};
student.school = school;

// ========================================

// 010. 객체의 키&값 삭제
// 주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.
// 그런데 철수와 관련이 없는 drink라는 키가 있네요.
// student에서 { drink: "사이다" }를 삭제해주세요.
let student = {
  name: "철수",
  drink: "사이다",
};

delete student.drink;

// ========================================

// 018. 조건문 연습
// input1, input2에는 boolean 타입인 true, false가 입력됩니다.
// 둘 중에 하나라도 true라면 "true"
// 두 개 모두 false면 "false"라는 문구를 띄워주세요.
function boolean(input1, input2) {
  if (input1 || input2) {
    return "true";
  } else {
    return "false";
  }
}

// 019. 홀짝
// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다.
// 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.
function evenOdd(num) {
  if (num === 0) {
    // 예외처리먼저!!
    return "Zero";
  }
  if (num % 2) {
    // 결과가 0일때 falsy한 값이니 else문으로 내려옴
    return "Odd";
  } else {
    return "Even";
  }
}
// 다른풀이
function evenOdd(num) {
  if (num === 0) {
    // 예외처리먼저!!
    return "Zero";
  } else if (!num % 2) {
    // 결과가 0일때 falsy한 값이니 반대연산자로 truthy한 값으로 바꿈
    return "Even";
  } else if (num % 2) {
    return "Odd";
  }
}

//=====================================

// 020. 온도
// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
// 입력된 값에 따라 알맞은 문구를 띄워주세요
// 18이하면 "조금 춥네요"
// 19~23이면 "날씨가 좋네요"
// 24이상이면 "조금 덥습니다"
function temperature(num) {
  if (num >= 24) {
    return "조금 덥습니다";
  } else if (num >= 19) {
    return "날씨가 좋네요";
  } else {
    return "조금 춥네요";
  }
}

// 021. 며칠
// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
// 각 조건에 해당하는 알맞은 값을 입력해주세요.

function days(month) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 28;
  }
}
//31일 : 1,3,5,7,8,10,12
//30일 : 4,6,9,11
//28일 : 2

// 다른 풀이
const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
function days(month) {
  return monthList[month];
}
//  키값으로 value를 뽑아오기
// ============================

// 023. 숫자 더하기
// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
// num은 1이상의 자연수가 들어옵니다.
// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.

function sum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    // i = i + 1과 동일
    count += i;
  }
  return count;
}

// =======================================================

// 024. 특정 문자열 세기
// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.
// **`입력 인자`**
// - str은 문자열입니다.

function countLetter(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  console.log(count);
}

countLetter("I am from Korea"); // 2
countLetter("A day without laughter is a day wasted."); // 6

//다른풀이
function counLetter(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count++;
      console.log(i, str[i]);
    }
  }

  return count;
}

// =========================

// 025. 문자열 삽입
//num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다.
// num이 3일 경우에는 "1-2-3"입니다.
// **`입력 인자`**
// - num은 숫자열입니다.

function makeNumber(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += -i;
  }

  // 각 숫자 뒤에 '-' 기호 붙이기.
  // 맨앞는 빼고

  str = str.split("");
  // console.log(str)
  str.shift();
  console.log(str);
  str = str.join("");
  console.log(str);
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7

// 다른풀이
function makeNumber(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += i;

    // 마지막의 "-"만 제거
    // i 와 num이 같지 않을때만 넣기
    if (i !== num) {
      str += "-";
    }
  }
  return str;
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7

// 처음부터 "-"를 붙이는 다른방법
function makeNumber(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i !== 1) {
      // i는 1부터 num까지.
      str += "-"; // 처음의 "-"만 제거
    }
    str += i;
  }
  return str;
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7

// =======================================
// **026. 홀수 문자열**
// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
// num이 5일 경우에는 "135"입니다.
// - num은 숫자열입니다.
function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      str += i;
    }
  }
  console.log(str);
}

makeOdd(5); // "135"
makeOdd(7); // "1357"

// 다른풀이
function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      str += i;
    }
  }
  console.log(str);
}

makeOdd(5); // "135"
makeOdd(7); // "1357"

// =======================================

// 027. 가장 큰 수 찾기  *******
//str은 무작위 숫자인 문자열입니다.
// 해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.
function bigNum(str) {
  let biggest = 0; // 제일 큰값을 넣으며 비교하는 대상
  for (let i = 0; i < str.length; i++) {
    if (biggest < Number(str[i])) {
      // 문자열을 숫자와 비교시 자동으로 문자를 숫자타입으로 바꾸어 비교하긴함.. 명시적으로 하기위해 명시해줌
      biggest = Number(str[i]);
    }
  }
  console.log(biggest);
  return biggest;
}

bigNum("12345"); // 5
bigNum("87135"); // 8

// ==========================

// 41. 조건문 실전 적용 - 점수에 따른 등급
// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"
//100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

function grade(score) {
  if (score > 100 || score < 0) {
    return "잘못된 점수입니다"; // 예외처리
  }
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// ============================

// 043. 마이페이지
// 오른쪽 myShopping은 내가 구매한 목록을 보여주고 있습니다.
// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고,
// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze

// "3~4" ⇒ Silver

// 5이상 ⇒ Gold

const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
]; // 배열안의 객체가 들어있는 데이터

let count = 0;
let priceAll = 0;
let grade = "";

for (let i = 0; i < myShopping.length; i++) {
  if (myShopping[i].category === "의류") {
    count++;
    priceAll += myShopping[i].price;
  }
  console.log(count);

  // console.log(count,priceAll)
}
if (count >= 5) {
  grade = "Gold";
} else if (count >= 3) {
  grade = "Silver";
} else {
  grade = "Bronze";
}
console.log(
  `의류를 구매한 횟수는 총 ${count}회 금액은 ${priceAll}원이며 등급은 ${grade}입니다` // 템플릿리터럴(리터럴탬플릿)방식. 기본값 -> 문자열로 받아옴
);
//console.log("의류를 구매한 횟수는 총 " + count + "회 금액은 " + amount + "뭔이며 등급은 " + grade +"입니다")
// 의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.

///
const Obj = {
  name: "철수",
  age: 12,
};

for (let key in Obj) {
  // 여기의 key는 변수명이니 원하는 이름 아무거나로 사용가능
  console.log(key, Obj[key]); //'name' '철수' 'age' 12
}

////
const arr = ["철수", 12, "d", "e", "c"];

for (let aa in arr) {
  console.log(aa, arr[aa]);
}
for (let aa of arr) {
  // for in문과는 다르게  데이터 바로 가져옴 속도느림.
  console.log(aa);
}

/////
const arr = ["철수", 12, "d", "e", "c"];

arr.forEach(function (el) {
  // 함수의 인자값으로 함수를 넘겨준다 => 고차함수
  // 그 함수의 인자값으로 각 요소가 들어옴.(el)에 각 요소들어옴
  console.log(el);
});

/////
// array의 메서드 mdn에서 검색해 익히기

////
let count = 0; // 최초식
while (count !== 5) {
  // 조건식 . 이 조건이 true일때만 아래 로직이 실행됨
  count = count + 1; // 증감식
  console.log(count);
} // while문은 내가 결과가 나올때까지 몇번을 실행해야할지 모를때 사용한다.
// 쓰는 순서 => 최초식, 증감식을 설정해준 후!

////
