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

// ==============================================
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.

function solution(s) {
  s = Number(s);
  return s;
  // 또는 return Number(s) // 직관적인 방법이기에 주로 사용
}

function solution(s) {
  return +s; // 뒤의 문자열을 연산시킴 =>자동으로 숫자타입으로 변환
  // 실무에서는 잘 사용 x(안정성떨어짐. 직관적이지 않음)
}

// ==============================================

// 같은 숫자는 싫어
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  console.log(answer);
  return answer;
}

// 다른풀이
function solution(arr) {
  const answer = [];
  let i = 0; // 인덱스값
  for (let key of arr) {
    // 속도느림
    // console.log(key)// arr의 i값
    if (key !== arr[i + 1]) {
      // 현재요소와 그 다음요소가 같지않을때
      answer.push(key); // answer에 넣는다.
    }
    i++;
  }
  return answer;
}

//for in문방법
function solution(arr) {
  //for in문 사용은 시간초과..
  const answer = [];

  for (let i in arr) {
    // i가 인덱스이긴한데 문자타입임.
    i = Number(i); // 숫자타입으로 바꾸기

    if (arr[i] !== arr[i + 1]) {
      // 현재요소와 그 다음요소가 같지않을때
      answer.push(arr[i]); // answer에 넣는다.
    }
    i++;
  }
  return answer;
}

// ==============================================

// 핸드폰 번호 가리기
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
function solution(phone_number) {
  let answer = "";
  // 뒤의 4자리를 제외하고 다 가리기
  answer = phone_number.slice(phone_number.length - 4);
  console.log(answer);
  const result = answer.padStart(phone_number.length, "*");
  return result;
}

// 반복문 사용방법
function solution(phone_number) {
  let answer = "";
  // // 뒤의 4자리를 제외하고 다 가리기
  // answer = phone_number.slice(phone_number.length-4)
  // console.log(answer)
  // const result = answer.padStart(phone_number.length,"*")
  // return result
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += "*";
    } else {
      // 전화번호 뒷 네자리 부분
      answer += phone_number[i];
    }
  }
  return answer;
}

// substring이라는 메서드를 사용한 방식
function solution(phone_number) {
  let answer = "";
  // 문자열에서 사용할 수 있는 함수인 메서드를 사용
  answer = answer.padStart(phone_number.length - 4, "*"); //for문에서의 if문 부분임.
  answer += phone_number.substring(phone_number.length - 4); // 내가 원하는 길이만큼 자름.// 소괄호 안에 아무것도 넣어주지 않는다면 복사해옴.
  // 자르고싶은 인덱스의 뒤의값을 넣으면됨. 두번째인자로는 두번째부분 인덱스를 제외하고 그 앞에까지 잘라오는것.
  // 첫번째 인자만 적은경우 해덩부분부터 맨끝까지

  return answer;
}

// ==============================================

// 짝수와 홀수
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd"; // 삼항연산자. 맞다면 앞에꺼 아니라면 뒤에꺼
  // 실무에서는 이분법적인 부분을 할때 삼항연산자를 주로사용.
}

// 다른 풀이

function solution(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 또 다른 풀이

function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

// truthy한 값, falsy한 값으로 나눔
// falsy한 값 ==> 0
function solution(num) {
  if (num % 2) {
    return "Odd";
  } else {
    return "Even";
  }
}

// ==========================================
// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 원소? => 배열이 가지는 데이터 각각을 의미함

function solution(arr) {
  let answer = 0;
  // console.log(arr.length)
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
    result = answer / arr.length;
  }
  // console.log(result);
  return result;
}

// reduce라는 배열메서드 사용
const arr = [1, 2, 3, 4];
const answer = arr.reduce((acc, cur) => {
  // acc는 누적값, cur은 현재값
  //acc에 첫번째 값을 return해야 두번째 값으로 (두번째 반복문에서) 그 값이 들어가게됨.
  return acc + cur;
}, 0); // reduce에는 중괄호 뒤에 초기값을 넣을 수 있음. 초기값을 넣으면 초기값으로 시작해 해당 인덱스를 참조함.

// reduce를 사용한 풀이
function solution(arr) {
  return (
    arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / arr.length
  ); // 여기까지의 결과가 총 합산한 결과임. 여기에서 arr.length를 나누어줌.
}

// =================================================

// 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  const center = Math.floor(s.length / 2); // 내림처리해 소수점 제거
  let answer = "";

  console.log(s.length / 2);

  answer = s[center];
  if (s.length % 2 === 0) {
    answer = s[center - 1] + answer;
  }

  return answer;
}

// 문자열 자르기 => substring 사용
function solution(s) {
  const center = Math.floor(s.length / 2); // 내림처리해 소수점 제거
  return s.length % 2
    ? s[center] // 문자열의 길이가 홀수인경우(0은 flasse니까..)
    : s.substring(center - 1, center + 1); // 첫번째인자에 들어가는 것부터, 두번째 인자의 전까지 잘라줌(slice도 두번째 인자부분에 +1 해야 원하는 부분까지 잘려 나옴)
}

// =======================================
// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

function solution(seoul) {
  // let answer = "";// 둘다 가능한듯 보임... 같은 답나옴
  let answer = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = i;
    }
  }
  return `김서방은 ${answer}에 있다`;
}

// break사용시
function solution(seoul) {
  // let answer = "";// 둘다 가능한듯 보임... 같은 답나옴
  let answer = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = i;
      break; //찾자마자 반복문 중단시킴.
    }
  }
  return `김서방은 ${answer}에 있다`;
}

// 함수안에서 바로 return을 사용하면 break가 됨과 동시에 함수가 중단된다
function solution(seoul) {
  // let answer = "";// 둘다 가능한듯 보임... 같은 답나옴

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

// 메서드 사용법=>indexOf
// indexOf를 사용하면 해당값이 있는 인덱스를 return 해줌.

function solution(seoul) {
  const x = seoul.indexOf("Kim");
  return `김서방은 ${x}에 있다.`;
}

// 문자열 다루기 기본
function solution(s) {
  if ((s.length === 4 && !isNaN(s)) || (s.length === 6 && !isNaN(s))) {
    return true;
  } else {
    return false;
  }
}

// 테스트 11 미통과

// isNaN(문자일경우 숫자가 아니니 true로 반환(자동으로 숫자타입으로 형변환))과 유사한 메서드
Number.isNaN(); // =>자동으로 숫자타입으로 변환하지 않고 NaN이 맞는지를 체크함.따라서 직접 형변환을 해주어야함.(엄격한 NaN)

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    // 길이가 1~ 8글자가 들어올 수 있는데 문제에서는 길이가 4 또는 6일때이니, 4 또는 6일때가 아닌경우에는 false를 리턴함.
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (Number.isNaN(Number(s[i])) === true) {
      return false; // 문자열 전체중에 하나라도 숫자가 아닌 문자가 포함되어 있는 경우.
    }
  }
  return true;
}
// for문을 다 통과한다몀(전체가 다 숫자라면)
// console.log(Number.isNaN(Number(s)))
// NaN값이면 true가 , 아니라면 false가 뜸.
//     if(Number.isNaN(Number.isNaN(Number(s)))){
//         return false;
//     }else{
//         return true
//     }
//     //"10e1" => 여기서 알파벳 e가 지수를 만드는 기호..? 따라서 얘를 Number로 바꾸어 isNaN을 하면 숫자이기에 false가 뜸.따라서 한번에 비교하지 않고, 따로따로..
//}

// 배열메서드 사용. 문자열을 우선 배열로만들기(문자열.split("")) 그리고 filter를 사용하기..?????
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    // 길이가 1~ 8글자가 들어올 수 있는데 문제에서는 길이가 4 또는 6일때이니, 4 또는 6일때가 아닌경우에는 false를 리턴함.
    return false;
  }
  const answer = s.split("").filter((el) => {
    // filter의 인자로는 이렇게 함수가 들어감!!
    // filter는 return뒤에 들어오는 조건이 true인 경우만 남김(새 배열을 만들어 넣어줌)
    return Number.isNaN(Number(el));
    //filter로 골랐을때 아무것도 고를 수 없다면 빈 배열을 가져옴.
  });
  return answer.length === 0;
}
// ====================================

// 약수의 합
// 약수 => 해당 숫자를 나누었을때 나누어떨어지는 수
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

//
function solution(n) {
  let answer = n; // 자기자신은 어차피 약수이니 미리 넣어주고,
  for (let i = 0; i <= n / 2; i++) {
    // 자기자신을 제외하고 가장큰 약수는 자기자신에 나누기 2한것. 따라서 자기자신은 미리 넣었으니 n / 2 까지만 반복하면됨...
    // 자기자신을 2로 나눈값을 구하면 쉽게 약수를 구할 수 있음
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 메서드 활용 => reduce
// reduce는 배열메서드이다. 현재 숫자니까 new Array로 배열을 만들어 진행해보다.
new Array(10); // 10개가 들어가는 빈 배열이 생성됨.
//따라서 길이를 구하면 길이는 찍히나 forEach는 작동되지 않음. --> 배열이 비어있기에..
function solution(n) {
  const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
    // console.log(acc,cur,i,cur+i)
    const num = cur + i; // 1부터 n의 값까지 ..나옴.
    return acc + (n % num === 0)
      ? num // 약수인경우
      : 0; // 약수가 아닌경우
  }, 0);
  // 1로 채워진 n의 길이의 배열이 만들어짐.
  // 메서드.메서드....=> 이런형태를 메서드 체인이라고 함.
  // reduce가 배열의 길이만큼 돌고있음.
  return answer;
}

// =====================================
// 자릿수 더하기
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

function solution(n) {
  let answer = 0;

  n = String(n);

  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }

  return answer;
}

// 메서드 사용. 배열에서만 사용하는 forEach사용
function solution(n) {
  let answer = 0;

  String(n)
    .split("")
    .forEach((el) => {
      answer += Number(el);
    }); //forEach에 담긴것은 undefined. 즉, forEach는 리턴갑싱 없는 단순한 반복문. 따라서 forEach는 변수에 따로 담아주지 않기.
  return answer;
}

// 다른메서드 사용. => reduce

function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((acc, cur) => {
      // 얘는 리턴값이 있기에 변수에 담아줄 수 있다.
      // console.log(acc,cur) // 현재값, 누적값
      return acc + Number(cur);
    }, 0); // 초기값을 0으로하면 acc는 0을 cur은 해당 인덱스 값이나옴.
  // .forEach((el) => {
  //  answer += Number(el)
  // });
  return answer;
}

// ===========================================

// x만큼의 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
  const answer = [];
  // x 씩 증가하는 n개의숫자.
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
// 메서드를 사용하기. 배열메서드인 map을 사용해보기.
// 로직이 완성된 결과물을 새로운 배열로 받아온다.
function solution(x, n) {
  const answer = new Array(n).fill(1).map((el, i) => {
    const num = el + i;
    return num * x;
  });
  return answer;
}

// forEach는 리턴값이 없고, map은 리턴값이 잇음. map에서는 return을 사용!
function solution(x, n) {
  const answer = [];
  new Array(n).fill(1).forEach((el, i) => {
    answer.push((el + i) * x);
  });
  return answer;
}
// ===================================
//자연수 뒤집어 배열로 만들기
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

function solution(n) {
  // n = n.toString() 얘도 숫자를 문자로 바꾸어줌. 단, 앞에 숫자데이터.toString()이렇게 작성
  const answer = String(n)
    .split("")
    .reverse()
    .map((el) => {
      return Number(el);
    }); // String의 경우는 소괄호 안에 해당 숫자데이터 넣음.
  return answer;
}

function solution(n) {
  const answer = [];
  n = n.toString(); // 문자열로 변경..
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i])); // 다시 숫자로 변경
  }
  return answer;
}

// =======================================
// 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  const answer = [];
  // console.log(numbers)
  // 각 배열의 요소를 하나씩 더해서 각각의 배열에 담음. ...
  // new set으로 중복값 제거

  // !! 먼저 기준이 되는 첫번째 인덱스를 구한다.
  for (let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i]);
    for (let l = i + 1; l < numbers.length; l++) {
      // 합산될 두번째 인덱스값을 구함.
      const sum = numbers[i] + numbers[l];

      // 배열에 합산될 결과를 찾았을때 , 없는 경우에만 배열에 넣는다.
      // (includes의 결과가 false일때만 넣어줌.)
      if (answer.includes(sum) === false) {
        answer.push(numbers[i] + numbers[l]);
      }

      // 큰 순서대로 나열.
      // array.sort()
    }
  }
  return answer.sort((a, b) => a - b); // 음수값이 나온다면 해당 B의 값을 뒤로(해당 a의 값을 앞으로 보내줌.) // 오름차순.
  // 내림차순 (큰 숫자가 앞으로)의 경우 => b -a
  // console.log(numbers.length,answer)
}

// 다른풀이
function solution(numbers) {
  const answer = new Set();
  // console.log(numbers)
  // 각 배열의 요소를 하나씩 더해서 각각의 배열에 담음. ...
  // new set으로 중복값은 애초에 못넣게 하기

  // !! 먼저 기준이 되는 첫번째 인덱스를 구한다.
  for (let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i]);
    for (let l = i + 1; l < numbers.length; l++) {
      // 합산될 두번째 인덱스값을 구함.
      const sum = numbers[i] + numbers[l];
      answer.add(sum);

      // new Set() ==> 배열 역할을 해주는 객체. 중복체크.
      // 배열에서 중복되는 데이터를 자동으로 제거해주는 메서드.

      // 배열도 객체의 일종이다... 배열이 실제로 배열이 맞는지 검증하기 위해서는 Array.isArray()를 사용하면 됨.( 소괄호 안에 넣음 )
      // 배열로 바꿀때 => Array.from() 배열이 아닌것을 배열로 변경한다.

      // 큰 순서대로 나열.
      // array.sort()
    }
  }
  return Array.from(answer).sort((a, b) => a - b);
}

// 또 다른...forEach 사용한방법
function solution(numbers) {
  const answer = new Set();

  // 1. 첫번째 인덱스 값을 가져오는 forEach.
  numbers.forEach((el, i) => {
    // 2. 두번째 인덱스 값을 가져오기 위한 forEach.
    numbers.slice(i + 1).forEach((el2) => {
      const sum = el + el2;
      if (answer.includes(sum) === false) {
        // includes를 사용해 내부에서 다시 반복이 일어나 set을 시용했을때보다 시간이 조금 더 걸림.
        answer.push(sum);
      }
    }); // 첫 인덱스의 다음인덱스부터 끝까지 잘라옴.
  });
  return Array.from(answer).sort((a, b) => a - b);
}

// set을 사용해 forEach 사용한방법
function solution(numbers) {
  const answer = new Set();

  // 1. 첫번째 인덱스 값을 가져오는 forEach.
  numbers.forEach((el, i) => {
    // 2. 두번째 인덱스 값을 가져오기 위한 forEach.
    numbers.slice(i + 1).forEach((el2) => {
      const sum = el + el2;
      answer.add(sum);
    }); // 첫 인덱스의 다음인덱스부터 끝까지 잘라옴.
  });
  return Array.from(answer).sort((a, b) => a - b);
}
// ========================================

// 내적
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
// ?? -....**
// function solution(a, b) {
//   const answer = a.reduce((acc, cur, i) => {
//     console.log(cur + a[i] * b[i] + acc);
//   }, 0);
// }

function solution(a, b) {
  let answer = 0;
  // 각 요소에 접근a
  for (let i = 0; i < a.length; i++) {
    // 두개의 길이가 같은 배열.
    answer += a[i] * b[i];
  }
  return answer;
}

// reduce사용
function solution(a, b) {
  const answer = a.reduce((cu, el, i) => {
    // 누적값, 각요소, 인덱스
    console.log(cu, el, b[i]);
    return cu + el * b[i];
  }, 0);
  return answer;
}

// =========================================

// ...***** 제일 작은수 제거하기
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
// sort사용

// for문 사용

function solution(arr) {
  const Min = [];
  // Min에 숫자를 넣음.
  // 그 수랑 arr와 비교..
  // 엑//.....ㅓ잇
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < Min.length; j++) {
//       if (arr[i] > Min[j]) {
//         Min.push(Min[j]);
//       }
//     }
//   }
// }
function solution(arr) {
   
  const answer =[]
  // 배열에서 작은 수 찾기.
  let min = arr[0]
  // 작은값이 있다면 넣기.
   for(let i = 1; i< arr.length ; i++){
    if(arr[i] < min) min =arr[i] // 제일 작은수를 찾음
   }
   // 제일 작은수를 배열에 추가
   for(let i = 0 ; i<arr.length;i++){
       if(arr[i] !== min) answer.push(arr[i])
   }
   return answer.length !== 0? 
   answer :[-1]
   
}

// 메서드 사용.
function solution(arr) {
   
  // Math.min(들어오는 인자중 가장 작은수를 찾는메서드)
  const min =
  Math.min(...arr)
  console.log(min)
  const answer = arr.filter((num)=>num !== min) // 제일 작은값 제거
      return answer.length === 0 ? [-1] : answer
  
}

// 또는 sort사용해 오름차순 정렬한다음 맨 앞값을 제거하는 방법
function solution(arr) {// 시간초과
 
  const answer = arr.sort((a,b)=>{
    return a-b
  })
answer.shift()
    const result = answer.sort((a,b)=>
      b-a
    )
    return answer.length === 0 ? [-1] : result
// return result.length === 0 ? [-1]
    
}



// ========================================
//문자열 내 p와 y의 개수

function solution(s) {
  let answer = true;
  let countP = 0;
  let countY = 0;

  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      countP++; // countP = countP + 1 , countP += 1 
    } else if (s[i] === "y") {
      countY++;
    }
  }
  if (countY === countP) {
    return answer;
  } else {
    return false;
  }
  //return countY === countP ? answer : false 얘와 동일
}

//


function solution(s){
   
  let countP = 0;
  let countY = 0;
  
s = s.toLowerCase() 
 
  for(let i = 0 ; i < s.length;i++){
      if(s[i] === "p"){
          countP++ // countP = countP + 1 , countP += 1 
      }
     else if(s[i] === "y") {
         countY++
     }    
  }
return countY === countP 

}



//
function solution(s){
   
  let countP = 0;
  let countY = 0;
  
s = s.toLowerCase() 
 const obj = {}
  for(let i = 0 ; i < s.length;i++){
    
      if(obj[s[i]] === undefined) obj[s[i]] =0
      obj[s[i]]++
  }
return obj.p === obj.y

 
}

// forEach 사용해보기.
function solution(s){
   
  const obj = {}
s = s.toLowerCase() 
  const answer = s.split("")
.forEach((letter)=>{
   obj[letter] === undefined ? obj[letter] = 1
    // 기존에 알파뱃이 없다면 1을 초기값으로 설정
   :obj[letter]++
       // 아니라면 기존의 알파벳 개수만 1 증가
})
  return obj.p === obj.y
  
}

// ============================================

// 이상한 문자 만들기 ****
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s) {

  let answer = '';
    let idx = 0; // 단어별 인덱스 값을 저장
    for(let i  = 0; i< s.length; i ++){
        if(s[i]===' '){
            answer += ' ' // answer += s[i]
                idx =  0; //  idx를 0으로 초기화
        
    
        
    }else{
        
        answer+= idx % 2 ===0
        // 짝수라면 대문자를 추가
        ? s[i].toUpperCase()
        // 홀수라면 소문자를 추가
        : s[i].toLowerCase()
    }
}

// map사용
function solution(s) {
  // 공백을 기준으로 쪼갬
  const answer = s.split(' ').map((w)=>{
     // 각각의 단어를 받아와 쪼갬(배열의 배열로..)
      return w.split("").map((letter,i)=>{
         return i  % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
      }).join('')
  }).join(' ')// 다시 공백을 기준으로 합침
 
  
 }


// ======================
// 알고리즘 테스트 3주차 2번
function prefix(strs){
  // 비교해줄 기준점
  const standard = strs[0];
  for(let i = 0 ; i <standard.length;i++){
    const temp = standard.slice(0,standard.length-i)// 뒤에서부터 잘라짐. 가장 긴 중복 문자를 찾으니 ..
    // 이 자른 temp값이 있어야함.
    for(let j = 0 ; j <strs.length ; j++){
      if(!strs[j].includes(temp)) break; // 없으면 반복문 중단
      if(j === strs.length-1) return temp // 같으면 쪼갠 값을 가져오기
    }
  }
  return '' // 모두 없다면 빈문자열을 리턴
}

prefix(['letter','leaf','leader'])


// ============================================

// 하샤드 수
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
   
  // 메서드 사용법. 반복과 연산된결과로 가져오기.
    // reduce 사용
    const answer = String(x)
                    .split("")
                    .reduce((acc,cur)=>{
                return acc + Number(cur)
                    },0) // 초기값이 처음부터 0이라는 숫자. 따라서 acc는 무조건 숫자타입임.
  return x % answer === 0 ? true : false
    
}

//
function solution(x) {
  // toString()이라는 메서드로 x를 문자열로 변경
 const answer = x.toString().split("").reduce((acc,cur)=>{
 
     return Number(acc)+Number(cur)
 }) // 초기값 지정 안해줬을경우
   return x % answer === 0 ? true : false
}


// for문


function solution(x) {
   
  // 메서드 사용법. 반복과 연산된결과로 가져오기.
    // reduce 사용
   x = String(x)
    // x를 문자타입으로 변경
// 인덱스로 접근
    let answer =0
  for(let i = 0 ; i < x.length;i++){
                      answer += Number(x[i])
                  }
   return x % answer === 0 ? true : false
    
}

// ============================================



// 콜라츠 추측
// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 
// 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.

//  작업은 다음과 같습니다.
// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 
// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
//  단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.


//....function solution(num) {
   // 짝수면 2로 나누고,, 홀수면 3을 곱하고 1을 더하고, 결국 1이 될때까지 반복.
    // 몇번 반복해야하는지를 리턴
    
// let answer = 0; // 반복횟수 담을 곳.
// //   // 총 500번을 반복했는데도 1이 안되면 -1을 리턴.
// //   // 반복... 반복문.. 
//   for(let i = 0 ; i  <= 500 ; i++ ){
//        if(num % 2 === 0 ){
//     num / 2
//            answer++
// }else{
//     num * 3 + 1
//     answer++
//       }      
//   }
//   // 500 번을 진행했는데도 1이 되지 않는다면 -1 리턴
  
//   if(answer === 500 ){
//       num !== 1
//       return -1
//   }
//   return answer


  
// }


//

function solution(num) {
    
  let answer = 0;
 for(let i = 0 ; i<500;i++){
     if(num === 1) return answer // 반복문종료됨과 동시에 답을 리턴
     answer++
     if(num % 2 === 0 ){
         num /= 2  // num = num / 2
         
     }else{
         num = num * 3 +1
     }
 }
  return -1 // 반복문이 끝났음에도 아무것도 리턴되지 않는다면..
 
}


//
function solution(num) {
  let answer = 0
 // forEach사용
  const result = new Array(500).fill(1)
                  .forEach(el=>{
                      if(num !==1){
                          answer++
                         if(num%2 === 0){
                          num /= 2
                      }else{
                          num = (num*3) +1
                      }
                      // 1을 만나는 순간중단해주어야함.
                      }
                    
                    
                  })
 // 반복문 몇번도는지.
  return num !== 1 ? -1 : answer
}


// ============================================


// 문자열 내림차순으로 정렬하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  let answer = '';
answer = s.split("").sort((a,b)=> {
  if (a > b) return -1;
  else if (b > a) return 1;
  else return 0; // 문자열 내림차순 정렬시 필요한것.
})
  return answer.join("");
}

// ======================================

function solution(s) {
  const answer = [];
  //sort사용시 배열필요
  // s.splite("") // 메서드를 사용해 쪼개는 방법
for(let i = 0 ; i < s.length ; i++){
      answer.push(s[i]) 
  // 배열로 쪼개넣는법
   }
  answer.sort((a,b)=>{
      return a > b ? -1 :  1// a가 b보다 크다면 앞으로 보내고 작으면 뒤로보냄.
  })
  return answer.join("") // 배열을 문자열로 바꿔주는 메서드
  // 문자열에는 각 번호가 존재함. => 유니코드 또는 아스키코드라고 불림.
  // "a".charCodeAt()을 사용하면 해당 아스키코드를 가져올 수 있음
  // 따라서 문자끼리 `>` `<`으로 비교한다면 유니코드로 변경되어 true나 false를 ...
  //sort자채는 오름차순 으로 정렬해주니 a,와 b를 넘겨줄 필요는 없으나, 숫자를 정렬하거나 명시적으로 표현하기 위해서는 넘겨줌
  // arr.sort((a,b)=>{
  // return b - a // 숫자에서 오름차순 정렬할때 사용.
// })
  // a를 찍었을경우 대문자가.b는 소문자가 나오는데..
  //return a> b ? -1 : 1 // a가 b보다클때.. 
  // 숫자를 정렬시에도 사용가능하다.
}
  // 배열에 숫자뿐만아니라 문자열도 포함되어있을경우도 있을 수 있기에 비교시에는 삼항연산자를 사용하기
// ======================================
// 메서드 사용하기
function solution(s) {
  const answer = s.split("").sort((a,b)=>{
      return a > b ? -1 : 1 // 내림차순 정렬(크면 뒤로 보내고, 작으면 앞으로)
  }).join("");
 return answer
//   answer.sort((a,b)=>{
//       return a > b ? -1 :  1// a가 b보다 크다면 앞으로 보내고 작으면 뒤로보냄.
//   })
//   return answer.join("")
// // 배열에 숫자뿐만아니라 문자열도 포함되어있을경우도 있을 수 있기에 비교시에는 삼항연산자를 사용하기
}

// =============================================

// 나누어 떨어지는 숫자 배열
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  const answer =[]; // 나누어떨어지는 숫자만 담음.
  for(let i = 0 ; i < arr.length;i++){
      if(arr[i] % divisor === 0){
         answer.push(arr[i])
      }
     
  }
 return answer.length === 0 ? [-1] : answer.sort((a,b)=>{
  // 그냥 sort()만 사용하면 앞자리를 기준으로 비교하기에 오름차순인지 내림차순인지 명시필요.
      return a > b ? 1 : -1
     // 오름차순 정렬(return a - b)와 동일.. // 숫자와 문자가 섞여있을 경우도 있을 수 있기에 a - b보다는 안전한 이 방법을 사용.
       //a가 b보다 크다면 뒤로보내고 아니라면 앞으로 보낸다.
 })
}
// ======================================
 
// 메서드 사용. 배열안에 내가 원하는결과만 담아온다. => filter사용.

function solution(arr, divisor) {
  const answer =arr.filter((num)=>{
    return num % divisor === 0
  }).sort((a,b)=>{
    return a > b ? 1 : -1
  })
 return answer.length === 0 ? [-1] : answer // 빈배열의 경우 : 빈배열이 아닐경우
 // 얘도 같은 방법
//   return answer.length === 0 ? [-1] : answer.sort((a,b)=> a > b ? 1 : -1)
}



// ===================================
// 정수 제곱근 판별
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {  
  return !((Math.sqrt(n) % 1)) ? Math.pow(Math.sqrt(n)+1,2) :-1

}


// ==========================
function solution(n) {
  for(let i = 1 ; i  <= n ; i++){
      console.log(i,i * i,n)
      //n까지 반복해 제곱근을 찾음. 
      if(i * i === n ){
          //제곱근을 찾은경우
          answer = i + 1; // 제곱근에 1을 더해준다.
          // 이 값을 제곱해 리턴한다.
          return answer * answer
      }
  }
   
   // 제곱근을 찾지 못한경우(반복문 돌려도 찾지못했을때)
   return -1
}

// ====================================
function solution(n) {
  let answer = -1 /// 초기값에 -1을 넣음
 for(let i = 1 ; i  <= n ; i++){
     console.log(i,i * i,n)
     //n까지 반복해 제곱근을 찾음. 
     if(i * i === n ){
         //제곱근을 찾은경우
         answer = i + 1; // 제곱근에 1을 더해준다.
         // 이 값을 제곱해 리턴한다.
         return answer * answer
     }
 }
  
  // 제곱근을 찾지 못한경우(반복문 돌려도 찾지못했을때)
  return answer
}


// ====================================

// while문 사용해보기 ==> 현재 for문보다 효율성이 더 좋음을 알 수 있음.

function solution(n) {
  let answer = 1 // 최초식
  while(answer * answer < n){ // 조건식
      answer++ // 증감식
  }
   return answer * answer === n
   ? (answer + 1) *(answer + 1) // 제곱근을 찾은경우
   : -1 //제곱근 찾지 못한경우
}


// ================================
// 메서드 사용 // 속도 빠름.
function solution(n) {
  let answer = Math.sqrt(n)  // ==>  n의 제곱근을찾음
        // 3의 경우 제곱근이 소수로나옴 => 소수점이 나오면 제곱근이 아니라고봄
  if(Number.isInteget(answer)){ // 정수임을 판별함
      answer++ // 숫자 하나를 더해주고
      return answer * answer
  }
   return -1 // Number.isInteger => 가 flase인 경우를 봄. 
// 정수가 아니다 ====> 제곱근이 아니다
        // 정수인지 확인하기. // true, false로 나옴.
        // console.log(answer,Number.isInteger(answer))
}


// 2 ** 2 => 앞에있는 숫자를 뒤에있는 숫자만큼 제곱하갰다는 의미
// 2 ** 5 => 2의 5제곱

// =====================
// K번째 수
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
//  commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를
  // 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(array, commands) {
  const answer = [];
  
  for(let idx=0 ; idx < commands.length ; idx++){
      // idx 로는 각 인덱스를 뽑아옴. 각 인덱스로 접근하면 그 안의 해당 배열을 가져올 수 있음
      const i = commands[idx][0]
      const j = commands[idx][1]
      const k = commands[idx][2]
      
      // commands[idx][0] => i
      // commands[idx][1] => j
      // commands[idx][2] => k
  
      const result = array.slice(i-1,j).sort((a,b)=>{
        return a > b ? 1: -1 // 오름차순정렬
          // return a - b 과 동일
      })
      // i는 차례. 따라서 인덱스값으로 변환시켜야 slice사용가능. 차례-1 이 인덱스값.
      // 뒤에 인자를 제외한 앞에까지를 의미
             answer.push(result[k-1])// k번째를 인덱스로 접근하기위해 1을 뺌
      }
  return answer
}


// ===============================
// 메서드 사용해보기
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.


function solution(array, commands) {// map은 새로운 배열을 리턴. forEach는 undefined를 리턴
  const answer = commands.map((el)=>{
    const result = array.slice(el[0]-1,el[1]).sort((a,b)=>{
        return a > b ? 1 :  -1
    })
    return result[el[2]-1]
      
  })
  return answer
}



/// ================================
// 행렬의 덧셈

// 행렬의 덧셈은 행과 열의 크기가 같은
//  두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {

    
  const answer = [[]]
  for(let i = 0 ; i < arr1.length ; i++){
      for(let j = 0 ; j < arr1[i].length; j++){
       const sum= arr1[i][j]+arr2[i][j] 
        
          
          if(answer[i] === undefined){
              // 배열이 없는경우 // 새로 만듬.
              // answer[i] = [] // 직접 데이터를 수정
              answer.push([])// 같은방법임
          }
          // answer[i][j] = sum // 배열에 데이터를 직접 할당.
      answer[i].push(sum)
      
      }
  }
  return answer  
  
     
  }


  // map 사용
  function solution(arr1, arr2) {

    
    const answer = arr1.map((el,index)=>{
        // el로는 각 배열을...
    return el.map((item,i)=>{
          const sum = item + arr2[index][i]
          return sum;
        })
        
    })
    return answer
       
    }
//=====================================

    // 2016년
    // 2016년 1월 1일은 금요일입니다. 
    // 2016년 a월 b일은 무슨 요일일까요? 
    // 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
    // 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
    // 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.




        // b는 date의 키값만큼의 길이를 가지고... 
     // a는 date의 키만큼존재.
//  1월 1일은 금요일.
    // console.log(date[1])
    // // console.log(date[key])
    // Object.values(date) 
   
       // for(let i = 0 ; i < )



// 몇월 며칠이 나오든 해당 날짜에 해당하는 요일이 리턴됨.

// 기준점 잡기 => 1월 1일은 금요일!!

// 1월 1일이라면 => 0일 금요일로부터 0요일지남. => 금요일
// 1월 2일 => 1일지남 => 토요일
// 3일 => 2일 => 금요일로부터 +2일  => 일요일
// 1월 4일  => 3일  => 금요일로부터 +3일의 요일이 지남 => 월요일
//1월 5일 => 4일 => +4 => 화요일
/// 1월 6일 => 5일 => +  5 => 수
//1월 7일 => 6일 => + 6 =>목
//1월 8일 => +7일지남 + 요일은 다시 금요일 (0) => 1월 1일부터 0개의 요일을지남.

//1월 15일 =>금요일 (0) + 14일 지남
// .
// .
// .
// .

const month = {
  1 : 31,
  2 : 29,
  3 : 31,
  4 : 30,
  5 : 31,
  6 : 30,
  7 : 31,
  8 : 31,
  9 : 30,
  10 : 31,
  11 : 30,
  12 : 31
}

const week = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
function solution(a, b) {
    
let days = 0;
    // 이미 지나간 날짜를 다 더함
    for(let i = 1;i < a;i++){
     // a월 이전의 모든달의 일수를 더해준다.
        days += month[i]
    }
    //a월중에서 흐른 일수를 더함 1월 1일 당일은 제외하고..
    days+=b-1
    // 며칠이 흘렀는지에 대해서...해당요일..
    return week[days%7]
    
}

// ========
// 연산된 값을 가져오는 reduce라는 메서드 활용 => 배열필요


const month = {
  1 : 31,
  2 : 29,
  3 : 31,
  4 : 30,
  5 : 31,
  6 : 30,
  7 : 31,
  8 : 31,
  9 : 30,
  10 : 31,
  11 : 30,
  12 : 31
}

const week = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
function solution(a, b) {
    
const days = new Array(a).fill(1).reduce((acc,cur,i)=>{
   // acc는 일단 초기값으로 지정해준 0으로 나옴.
    // cur은 1...
    const mn = cur + i
    return acc +(
    mn !== a
        // a월과 동일하지 않다. = 지나간 월의 경우를 의미(지나간 일수를 다 더해줌)

    ? //현재월일경우(지나간 일수만큼 더하고 당일은 빼기)
month[mn]        : b- 1
 )   
    
},0)
return week[days% 7]
    
}

// 문자열을 배열로 만드는 메서드 
// 1. str.split("")
//2. Array.form(str)=> 하나씩 쪼개지는 배열을 가져옴. 
// 해당배열을 얕은복사를 from이라는애가 해줌// 
// 첫번째들어오는인자를 배열로 만들어줌. 베얄을 만들고, 그 원소값을 el로 뽑아올 수도 있ㅇ,ㅁ.

// new Array(num).fill(1).map((el,i)=>el+i) 아래와 같은것.

// // 문자열을 배열로 만드는ㄴ 가장 간단한방법
// Array.from(new Array(a),(el,i)=>{// 현재 들어오는값만큼의 배열이 만들어짐. 이
//   console.log(el,i)
//   return el+1

// })

const month = {
  1: 31,
  2: 29,
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
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return acc + (mn !== a ? month[mn] : b - 1);
  }, 0);
  return week[days % 7];
}

// ==================================

// 자바스크립트의 기능 사용
// new라는것. => 뒤에 사용할것을 객체형태로 만들어줘 라는의미였다.
// const date = new Date(2023,2) // 2023,2 여기까지 적으면 2월을 가져오는데, 년도, 월, 일을 다 넣었을때
// 해당 월수에 하나 더한값을 내옴. 따라서 세가지를 다 적을 시
// const date = new Date(2023,2 -1 , 3) // 이렇게 월에 1을 뺀값으로 넣어 
// date.getDay() =>// 일요일로부터 몇개의 요일이 지났는지 뽑을 수 있음.





const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
function solution(a, b) {
    const day = new Date(2016,a - 1,b).getDay();
    // console.log(week[day],day)
    return week[day]
}


// ==================================================
// 최대공약수와 최소공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
//  예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.


function solution(n, m) {
  // 최대공약수 : 두 수의 공통되는 약수중 제일큰수
   // 최소 공배수: 두 수의 공통되는 배수중에서 제일큰 수 

   // const biggest = n > m ? n : m // 두 수 중에서 가장 큰 값을 저장하는 상수값
   const biggest = Math.max(n,m)// 여러수중에 가장 큰값을 뽑아 할당
   let max = 0 ; // 공약수중에서 제일 큰 수만
   for(let i = 1 ; i <= biggest ;i++){
       // 두개모두 i로 나눴을때 나머지가 0일경우여야 공약수
       if(n % i === 0 && m % i === 0){
           // 공약수 구하기
           max = i
       }
   }
   // 최소공배수 구하기
   let min = 0;
   //공배수 중에서 제일 작은수만 저장
   for(let j = biggest ; j <= n *m;j+=biggest ){
       if(j % Math.min(n,m) === 0){
           // j를  제일 작은수로 나눴을때 나누어떨어진다면 j는 제일작은수의 배수라고 볼 수 있다.
               min = j
           // 제일 작은수를 찾았을때 반복문 중단
           break;
       }
   }
   return [max,min]
}

//    유클리드 호재법으로 최대공약수 구하기
// 큰수, 작은수, 나머지값 필요
// A오ㅏ B의 최대공약수
// A(큰수)를 B(직은수)로 나눈 나머지를 구하고,
// B를 그 나머지로 나눈 나머지2를 구하고,
// 나머지를 나머지2로 나눈 나머지를 구하고..... 계속 반복.
// 어느한쪽이 나누어 떨어질때까지반복.
// 나누어지기 바로 직전에 얻은 나머지가 최대공약수

function solution(n, m) {
  let a = Math.max(m,n); // 큰수
let b= Math.min(m,n)// 작은수
let r = 0; // 나머지

while(a % b > 0){ // 최대공약수가 구해질때 까지(a와 b를 나눴을때 나머지가 0일경우)
// 큰수에서 작은수 나눴을때 0보다크다면 반복
r = a % b; // 큰 수에서 작은수를 나눴을때 나온 나머지값
a = b; // 큰 수에 작은수를 재할당.
b = r;// 작은수에 나머지값 재할당
}
    return [b , (n*m) / b]
    // 최소 공배수는 두 수를 곱한값에 최대공약수을 ㄹ나눈 몫의 값
}

// ============================

function solution(nums) {
  const answer =[];
   for(let i = 0 ; i < nums.length; i++){
     
       //최대한 많ㄴ은 종류의 폰켓몬.
       // includes는 데이터개수만큼 안에서 또 반복이돌아 속도느림.
       if(answer.includes(nums[i])===false && (nums.length / 2) !== answer.length){// 동일한 것이 없으면서 answer의 길이와 nums.legth 의 반과 다를떄
           answer.push(nums[i])
       }
     
   }
    return answer.length
}

// set 사용법(중복 자동 제거)
function solution(nums) {
  const answer = new Set();
  for(let i = 0 ; i < nums.length ; i++){
      if((nums.length / 2) !== answer.size){
          answer.add(nums[i])
      }
  }
return answer.size
}

// ==============================

// 반복문 없이 사용
function solution(nums) {
  const answer = new Set(nums).size // 전체 폰켓몬 중에서 중복 데이터를 다 빼고, 몇마리남았는지 담아줌.
  const limit = nums.length / 2 // 내가 가질수 있는 폰캣몬의 최대개수
  if(limit >= answer){ // 내가 가질수 있는것이 고유한것보다 크거나 같을때
      return answer // 가져감
      
  }
  
  return limit;
  
  }

  // 예산
  // 문제 설명
// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.


function solution(d, budget) {
  // 지원이 가능한 부서까지 담기
   const answer = [];
   // 모든 부서가 신청한 금액을 낮은금액부터 오름차순 정렬
   d.sort((a,b)=> a > b ? 1   : -1)
   let sum = 0 // 각각의 부서가 신청한 금액을 합한 가격
   
for(let i = 0 ; i<d.length;i++){
   sum+= d[i]
   if(sum <= budget){
       answer.push(d[i])
   }
}
   return answer.length
}
// 두개의 변수가있음 => 메모리 소요 다.
function solution(d, budget) {
  // 지원이 가능한 부서까지 담기
   let answer =0;
   // 모든 부서가 신청한 금액을 낮은금액부터 오름차순 정렬
   d.sort((a,b)=> a > b ? 1   : -1)
   let sum = 0 // 각각의 부서가 신청한 금액을 합한 가격
   
for(let i = 0 ; i<d.length;i++){
   sum+= d[i]
   if(sum <= budget){
       answer++
   }
}
   return answer
}

// while문 사용 => 변수가 하나. => 메모리 소요 적음.
function solution(d, budget) {
   
  // 모든 부서가 신청한 금액을 낮은금액부터 오름차순 정렬
  d.sort((a,b)=> a > b ? 1   : -1)
 let idx = 0;
  while(budget - d[idx] >=0 ){// 부서가 신청한 배열에서 idx값을 뺌 // 0이상일때만 반복
      budget-=d[idx]
      idx++
  }
  return idx

}

// 지원가능한 부서만 골라 배열에 담는다.
function solution(d, budget) {
  // 지원가능한 부서만 새 배열에 -> filter사용
       return d.sort((a,b)=> a > b ? 1   : -1)
     .filter(mn =>{
           console.log(mn)
           budget -= mn
           console.log(mn,budget)
       return budget >= 0 // 전체 예산에서 부족하지 안을떄만 새 배열에.
       }).length // 전체 길이를 return 
 
 }
// ============================


function solution(participant, completion) {
  //동명이인 존재.
   // 참가자 이름 소문자
   // 완주못한사람 한명리턴
   // 참가자는 participant
   // 완주자는 completion
   // participant와 completion을 비교해 같은것을 제거하면 좋은데,
   //  자리수가 다르면 빈배열을 넣어주....
const result = [...participant,...completion].sort((a,b)=>{
 return a > b ? 1 : -1
}).filter((el,i)=>{
 console.log(el,i)
   // el이 두개인것은 제거...
  return el[i] === el[i+1]
})
console.log(result) 
} // ====> X

// 풀이
function solution(participant, completion) {

  participant.sort((a,b)=> a>b ? -1 : 1)
  
  for(let i = 0 ; i < completion.length ; i++){//1.
if(participant.includes(completion[i])){//2.
  // 이 위치에 있는것을 삭제
  // splice를 사용. 첫번째인자로 어디부터 지우거나 추가할것인지에 관한 인덱스를 넣어줌
  // 두번째인자는 첫번째  인자로부터 몇개를 지울것인지. => 이렇게 하고 나서의 결과는 splice하고나서 지워진 결과를 반환
  // 본래의 배열에서는 지워진것이 반영된 배열이 되고,
  // 아무것도 지우지 않을거면 두번째인자에 0을 넣거나 비워둔다.
  // 세번째 인자에는 추가하고자하는 데이터를 넣는다.이렇개되면 지워진 그 자리에 추가가 된다.
  participant.splice(participant.indexOf(completion[i]),1)
 //3,4 
}
      // console.log(participant[0])
      return participant[0]
      
}

 
}  // =>> 시간초과 => 반복문이 4번돌아가는꼴

// 
function solution(participant, completion) {

  // 해시문제 => 키 value값 이용(객체를 이용해 문제를 풀어본다.)
    const obj = {};
    // 키는 참가자 이름,value는 참가자포함한 총 명수
    for(let i = 0;i < participant.length; i++){

        if(obj[participant[i]] === undefined){
            //undefined라면만들어놓는다.
            obj[participant[i]] = 0;
        }
        obj[participant[i]]++         // 키값의 value값을 하나씩 늘림// 빈객체에 이름을사용한 키값으로 접근하는데, 비어있으니 undefined. 여기에 하나씩 더해주니 NaN값뜸.
    }
// console.log(obj);
    
    //완주한 수만큼 뺀다.
    for(let i = 0; i < completion.length;i++){
        
        obj[completion[i]]--;
        // completion에 해당하는 obj의 value를 하나씩뺌
    }
   // 참가자 명단에만 있는 사람찾기. value가 0이 아닌사람.
    // 객체 반복
    for(let key in obj){
       if(obj[key] !== 0 ) {
           return key
       }
        
    }
   
}

// ========================
// set과 같이 나온 문법인 map => map은 객체 대용으로 사용이 가능하다.(new Map())

function solution(participant, completion) {

  participant.sort((a,b)=> 
    a > b ? 1 : -1
  );
      completion.sort((a,b)=>
        a > b ? 1 : -1
      );
      let answer = ""
      for(let i = 0 ; i < participant.length ; i++){
          if(participant[i] !== completion[i]){
              answer = participant[i]
              break; // 한번찾았다면 반복문 중단
          }
          // console.log(i,participant[i],completion[i])
          
      }
   return answer
  }


  // filter사용
  function solution(participant, completion) {

    participant.sort((a,b)=> 
      a > b ? 1 : -1
    );
    completion.sort((a,b)=>
          a > b ? 1 : -1
        );
       const answer = participant.filter((name,index)=>{
           // console.log(name, index,completion[index])
           return name !== completion[index]
       })
       return answer[0]
    }


    // ==========================================================
    // 피보나치 수열

    function solution(n) {
      // n = 5 ==> F(5) = F(5-1) + F(5-2)
       const answer = [0 ,1] //피보나치 수의 결과들이 담겨있는 배열. 0번째는 0번째 피보나치가...
               for(let i = 2 ; i <= n; i++ ){
                   answer[i] = answer[i-1] + answer[i-2]
   console.log(answer)
                   
               }
       return answer[n] %1234567
   }
   // 테스트 미통과 -> 제한사항을 못받는다(n은 2이상 100000이하)

   function solution(n) {
    // n = 5 ==> F(5) = F(5-1) + F(5-2)
     const answer = [0 ,1] //피보나치 수의 결과들이 담겨있는 배열. 0번째는 0번째 피보나치가...
             for(let i = 2 ; i <= n; i++ ){
                 answer[i] = (answer[i-1] + answer[i-2])%1234567
                 
             }
     return answer[n] 
 }

 // 얘는 통과됨. 왜??
// 숫자는 프로그래밍 상 Int타입. 그러나 표현할 수 있는 범위 존재.
// 나타낼 수 있는 범위 2** 53 -1
// 프로그래밍상에서 안전한 범위를 알려면 Number.isSafeInteger(여기검증할 숫자를 넣음.)

// 메서드 사용

function solution(n) {

  let prev =0;// n - 2의 피보나치수결과가 저장됨.
  return new Array(n -1).fill(1).reduce((acc// 누적값
                                     )=>{
      const sum = (acc + prev) %1234567;
  // 첫번째 피보나치 수와 이전것을 더함

      prev = acc // 누적값을 다시 담아줌
      return sum;
  },1)// 첫번째 피보나치수의 결과를 초기값으로 사용
  
}


/// 숫자문자열과 영단어


const num = {
  zero:0,
  one:1,
  two:2,
  three:3,
  four:4,
  five:5,
  six:6,
  seven:7,
  eight:8,
  nine:9
};
function solution(s) {
// s의 원래 숫자
  // 각 숫자에 대응되는 영단어
let answer = ""
let str = ""
for(let i = 0 ; i<s.length ; i++){
    if(Number.isNaN(Number(s[i]))){
        //NaN이 뜨면 문자. 숫자가 아닌경우 
       str += s[i]
    }else{// 숫자면 바로 넣어줌(isNaN에서 false가 나옴)
    answer+=s[i]// 순서대로 넣어줌
        
    }
    if(num[str]!==undefined){
        answer += num[str];
        str="" // 그다음에 가져올영단어를 위해 초기화
    }
}
  
return Number(answer)
}


//  ==

// replace, 배열이용

const num= [
  "zero",
 "one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
]

function solution(s) {

for(let i = 0 ; i<num.length ; i++){
 // replace로 영어단어를 숫자로바꾸기..
    s = s.replace(num[i],i)// s에 다시 넣어주기
    
}
  return Number(s)
  

}

// ===
const num= [
  "zero",
 "one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
]

function solution(s) {

for(let i = 0 ; i<num.length ; i++){
 // replace로 영어단어를 숫자로바꾸기..
    
    // 영어단어가 2개이상일경우 있을때까지 무한반복되게 while사용
    while(s.includes(num[i])){// 내가 바꾸려는 문자열이 있는지 확인
        // 있으면 replace
    s = s.replace(num[i],i)// s에 다시 넣어주기
    // 문자열 자체를 해당하는 문자열로 다 바꾸었다!!
        
    }
    
}
  return Number(s)
  

}

// ===
const num= [
  "zero",
 "one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
]

function solution(s) {

for(let i = 0 ; i<num.length ; i++){
    // 있으면 replace
s = s.replaceAll(num[i],i)// s에 다시 넣어주기
// 문자열 자체를 해당하는 문자열로 다 바꾸었다!!
    // 문자열을 다 바꿀경우 while문 대신 replaceAll을 사용하는 방법
    
}
  return Number(s)
  

}


// forEach사용
const num= [
  "zero",
 "one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
]

function solution(s) {

num.forEach((str,i)=>{
      s = s.split(str).join(i)// num의 i를 기준으로 쪼개고 그 부분을 i로 바꿈. ==>  replaceAll 나오기전에 많이 사용되던 방식
   })
return Number(s)
   // split과
//join 이용하면 split한어떤 문자자리에 join에 넣어준 문자가 생긴다.

}


// 정규표현식 사용하기

function solution(s) {
s = s.replace(/one/g,1) //one이라는 문자열이 있다면 숫자 1으로 바꿔라
s = s.replace(/three/g,3)
s = s.replace(/four/g,4)
s = s.replace(/five/g,5)
s = s.replace(/six/g,6)
s = s.replace(/seven/g,7)
s = s.replace(/eight/g,8)
s = s.replace(/nine/g,9)
  
  
  return Number(s)

}

// 반복문과 정규표현식 사용하기
const num= [
  "zero",
 "one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
]

function solution(s) {
for(let i = 0 ; i < num.length; i++){
  // s = s.replace(/num[i]/g,i) // 정규표현식에서는 변수가 하나의 문자열로 취급이 됨.
  // 직접적으로 변수 넣고 싶을때는 new RegExp이라는 문법을 사용
  //const regExp = new RegExp(어떤 변수를 넣을지,플래그) // g는 전역(글로벌)즉, 전체를 의미
const regExp = new RegExp(num[i],"g")
s = s.replace(regExp,i) // regExp로만든 정규표현식. 즉, num[i] 부분을 i로 바꿈
}
  
  
  return Number(s)

}


/// ============================================

// 시저암호
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  // 한칸씩 밀기.
    // 먼저 지금 가지고있는 알파벳찾기.
    let answer = ""
    for (let i = 0; i < s.length;i++){
        // console.log(i,s[i],n)
        // 예외처리. 공백은 아무리 밀어도 공백이라 값이 변하지 않음.
        if(s[i] === " "){
            answer += s[i] // " "
        }else{
            //알파벳만 가져오기// 총 26글자. 인덱스로 z는 25
            let idx = alphabet.indexOf(s[i]) // 해당 인덱스를 뽑아보기
            const word = idx > 25 ? alphabet.substring(26)// 대문자라면 26부터 끝까지 잘라..
            :alphabet.substring(0,26)// 소문자의경우
            // 이렇게 해당 문자열을 가져오게됨.
            idx = word.indexOf(s[i]) + n// 자른거에서 다시 인덱스 뽑아옴 + n만큼 밀어줌
            // 밀어줬을때 undefuned가 나오면 알파벳의 범위(26자)를 초과한것
            if(word[idx] === undefined){
                idx -= 26;
            }
            answer +=word[idx]
        }
    }
    return answer;
}

/// 대소문자 구분해 풀어보기  ==> includes를 이용함


const lower ="abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  // 한칸씩 밀기.
    // 먼저 지금 가지고있는 알파벳찾기.
    let answer = ""
    for (let i = 0; i < s.length;i++){
        // console.log(i,s[i],n)
        // 예외처리. 공백은 아무리 밀어도 공백이라 값이 변하지 않음.
        if(s[i] === " "){
            answer += s[i] // " "
        }else{
           // 대소문자 판단 => 
            const word = lower.includes(s[i])// 실제로 소문자에 포함이되는지.// true면 해당 lower문자를 담아주고 아니면 upper을 여기 담아주기.
            ? lower : upper;
            let idx = word.indexOf(s[i]) + n
            console.log(s[i],word,idx)
            
            if(idx >=26){// 알파벳 26자를 초과한경우
                idx -= 26;
            }
answer += word[idx]
        }
    }
    return answer;
}

// 메서드 이용

const lower ="abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  return Array.from(s) // s.split과 동일
    .reduce((acc,cur)=>{
  const word = lower.includes(cur) ? 
lower : upper;// 현재값이 lower에 포함되는지.
      let idx = word.indexOf(cur) + n
      // 만약 알파벳개수 26을 초과한경우
      if(idx >=26){
          idx -=26
      }
      // 다음반복문에 acc를 넘기기위해 return // 공백이면 공백을 아니면 다음 알파벳을 넣어 다음 반복문으로
      
      return acc +(cur ===" " ? " "  : word[idx]
      
      } ,""
)
}          

// =============================
// 체육복
function solution(n, lost, reserve) {
  //   바로 앞뒤에만 빌려줄 수 있음
   const losted = [...lost]
   lost = lost.filter(student=>
                      !reserve.includes(student)
                      ).sort((a,b)=>a>b ? 1 : -1) // a - b
   reserve = reserve.filter(student => !losted.includes(student))
                    .sort((a,b)=>a>b ? 1 : -1)// 오름차순으로 정렬된 상태로 앞뒤로 찾아야함.
   console.log(lost)
   let answer = n- lost.length;// 전체학생수에서 잃어버린 학생수를 뺌
   for(let i = 0;i<lost.length;i++){
// 앞자리나 뒷자리에 여벌체육복 가지는지
       if(reserve.includes(lost[i]-1)){
           // 앞쪽// 빌려주면 여벌체육복 없는 상태여야함.
      reserve.splice(reserve.indexOf(lost[i] - 1),1)// 뒤에는 몇개를 지울것인지, 처음인자는 시작점의미.
           answer ++
       }else if(reserve.includes(lost[i]+1)){
           // 뒤쪽
           reserve.splice(reserve.indexOf(lost[i]+1),1)
           answer++
       }
       // 만약 여벌체육복이 있는사람이 도난당했다면
       
   }
   return answer
}

// 메서드 reduce사용
function solution(n, lost, reserve) {
  //   바로 앞뒤에만 빌려줄 수 있음
   const losted = [...lost]
   lost = lost.filter(student=>
                      !reserve.includes(student)
                      ).sort((a,b)=>a>b ? 1 : -1) // a - b
   reserve = reserve.filter(student => !losted.includes(student)).sort((a,b)=>a>b ? 1 : -1)
  
   return lost.reduce((acc,cur)=>{
       const prev = reserve.indexOf(cur-1)
       const next = reserve.indexOf(cur + 1)
       if(prev !== -1){
           reserve.splice(prev - 1)
           acc++
       }else if(next !== -1){
           reserve.splice(next - 1)
           acc++
       }
       return acc
   },n - lost.length)// 지금 체육수업가능한 학생수만큼이 초기값
}
/// 배열을 복사해 사용
function solution(n, lost, reserve) {
  //   바로 앞뒤에만 빌려줄 수 있음
   const losted = [...lost]
   lost = lost.filter(student=>
                      !reserve.includes(student)
                      ).sort((a,b)=>a>b ? 1 : -1) // a - b
   reserve = reserve.filter(student => !losted.includes(student)).sort((a,b)=>a>b ? 1 : -1)
  
   // 원본을 건드리는것은 되도록 하지 말아야함. 따라서
   const temp = [...reserve] // 이것을 사용(복사한것)
   return lost.reduce((acc,cur)=>{
       const prev = temp.indexOf(cur-1)
       const next = temp.indexOf(cur + 1)
       if(prev !== -1){
           temp[prev] = null // 안쓰는 부분이니 비워놓겠다
           // 즉 splice대신 사용하여 없으면 비워줌
           acc++
       }else if(next !== -1){
           temp[next] = null
           acc++
       }
       return acc
   },n - lost.length)// 지금 체육수업가능한 학생수만큼이 초기값
}

/// ========================
// 모의고사 - 수포자
const answerT = [
  [1,2,3,4,5], // 1번수포자가 찍는 방식
  [2,1,2,3,2,4,2,5], //2번 수포자가 찍는 방식
  [3,3,1,1,2,2,4,4,5,5],// 3번 //
]


function solution(answers) {
const score = answerT.map((el,i)=>{
  // console.log(el,i)
 const studentScore = answers.reduce((acc,cur,l)=>{
     // console.log(el[l%el.length],el)
     return acc +( el[l%el.length] ===cur ? 1 : 0)
     // 누적값을 바로 return
 },0)
   return {number:i+1,score:studentScore}
})
  // console.log(score)
  
  // 제일 많이 맞춘 학생의 점수를 뽑는다.
  const biggest = Math.max(...score.map((el)=>{
      return el.score 
  }))
const answer =score.filter(el =>{
  console.log(el)
  return el.score === biggest
}).map(el =>
     {
  return el.number
})
return answer
  }


  // =======================
  function solution(N, stages) {
    
    // 모든 스테이지를 오름차순으로 정렬
stages.sort((a,b)=>a>b?1:-1);
    console.log(stages)
    const infos = []
    for(let i = 1;i <=N;i++){
        infos.push({
            stage:i, //현재 스테이지 번호
            users:0, //현스테이지 플레이하고있는 유저수
            fail:0 // 현재스테이지 실패율
            
        })
    }
    
    let allUsers = stages.length;// 전체 유저수 저장
   // 현재 유저가 어떤 스테이지에 머물러있는가
    for(let i = 0 ; i <stages.length;i++){
        if(infos[stages[i] -1] ){
            infos[stages[i]-1].users++ // 유저합계
            if(stages[i]!==stages[i+1]){
                
            // 현재스테이지 번호와 다음 스테이지 번호가 일치하지 않는경우
                // 즉 현재 스테이지 번호 합산이 끝나는 순간
const fail = infos[stages[i] -1].users /allUsers // 실패율
// 모든 유저의수 : stages의 length => allUsers
allUsers -= infos[stages[i]-1].users // 남는 유저
                infos[stages[i]-1].fail = fail
                
            }
        }
    }
    // 실패율에 따라 내림차순으로 정렬
return infos.sort((a,b)=>{
// a와 b가 각각 객체를 가짐.
        return a.fail > b.fail ? -1 : 1
    }).map((el)=>el.stage)
}


// === fill, map사용
function solution(N, stages) {
  stages.sort( (a, b) => a - b )
  
  let allUsers = stages.length; // 총 유저의 수
  const answer = new Array( N )
                  .fill(1)
                  // new Array(N).fill(1).map((num,i)=>{
    //     // i를 같이 가져옴으로써 1부터 증가된값을 표현
    //     const stage = num + i;
    //     console.log(stage)
    // })
                  .map( (num, i) => {
                      const stage = num + i;
                      const arr = stages.slice(
                          stages.indexOf( stage ),
                          stages.lastIndexOf( stage ) + 1
                      )
                      const fail = arr.length / allUsers;
                      allUsers -= arr.length;
                      
                      return { stage, fail }
                  }).sort( (a, b) => {
                      return b.fail - a.fail // 내림차순
                  }).map( el => el.stage );
  return answer;
}


// ========================
function solution(board, moves) {
  let answer = 0;
const bucket = []
for(let i = 0 ; i< moves.length; i++){
  // console.log(moves[i])// 크레인이 위치할곳(위치값)구하는 반복문
  // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값구하는 반복문
for(let l = 0 ;l<board.length;l++){
  console.log(board[l],board[l][moves[i]-1])
const doll = board[l][moves[i]-1];
  if(doll !== 0){
//각자칸에 인형이 들어있다면 -> 0이 아니라면
      
      board[l][moves[i]-1] = 0 
      // 0이면 빈칸. 인형을 뽑아오면 해당위치는 빈칸으로만들기.
      // 내가 지금 뽑은 인형과 바구니 마지막에 들어있는 인형이 동일하다면둘다 제거
      if(bucket[bucket.length - 1] === doll){
          bucket.splice(bucket.length -  1 , 1)
          // === bucket.pop()과 동일
          
          answer +=2
          break ;// 인형삭제하고 멈추고, 다시 반복문으로.
      }
      bucket.push(doll)
      // console.log(board[l],bucket)
      
      break ;
      // 인형을 한번이라도 뽑았다면 해당위치는 멈춘다.
      // 즉 그 위치에서는 끝나고 다음위치로 이동한다.
      // 그리고 인형을 뽑았다면 해당 위치에서 제거해준다.
      
  }
  
}
}
  return answer
}

//  ====================

function solution(board, moves) {
  let answer = 0
  const bucket = []
  moves.forEach(move =>{
      
      // 스위치변수. 원하는 위치에서 반복문안에있는 로직을 실행하지 않게하는 변수.
    let checked = false
      
      board.forEach(location =>{
        const doll = location[move - 1 ]
        if(checked ===false){
        if(doll !==0){
            location[move -1 ] = 0
            if(bucket.at(-1) === doll){ 
  // 마지막 인형과 동일할 경우 바구니에서 제거
                bucket.splice(bucket.length-1 , 1);
                answer +=2
            }else{
            bucket.push(doll);
                // 동일하지 않을 경우, 인형을 바구니에 추가
            }
            checked = true
        }
        }
        // 크레인이 현 위치에서뽑았으면 멈추고 다음위치로이동하는것처리.
        // forEach에서 내가 원하는 위치에서 멈추고 반복하게할것인지 쓰려면... =>switch 변수를 사용하기
    })
  })
  return answer;
  }

  // ========================================