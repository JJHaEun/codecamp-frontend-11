export default function TypescriptPage() {
  // 자바스크립트 영역이 타입스크립트로 바뀌는것.

  // 타입추론: 처음들어간 값을 가지고 추론함.
  let aaa = "안녕하세요";
  aaa = 3;

  // 타입명시
  let bbb: string = "반갑습니다";
  bbb = 10;

  // 타입 명시가 필요한상황
  let ccc: number | string = 1000; // 숫자타입과, 문자타입 둘다 가능할때 명시!!
  ccc = "1000원";

  // 숫자타입
  //   let ddd: number = 10;
  let ddd = 10;
  ddd = "철수";

  let eee: boolean = true;
  eee = false;
  eee = "false"; // true // 거짓을 의미하는 문자열 => 빈문자열. 따라서 빈문자열이 아닌 "false"는 true로 작동함.

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕"]; // 숫자배열타입이라는 의미

  let ggg: string[] = ["철수", "영희", "훈이", 10]; // 문자배열타입이라는 의미
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; // 타입을 추론해 어떤 타입을 사용하는지 알아보기

  // 객체타입
  interface IProfile {
    // 타입스크립트에서는 콤마 없음
    name: string;
    age: number | string;
    school: string;
    hobby?: string; // 있어도 되고 없어도 됨. 있으면 타입은 string. 띠라서 물음표를 붙임.
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  }; // 얘도 변수에 마우스를 올리면 타입 추론됨.
  profile.name = "훈이"; // 타입추론으로 이것만 가능.
  profile.age = "8살"; //
  profile.hobby = "수영"; //profile타입(추론된) 에 hobby라는것이 없어 에러<div className=""></div>

  // **** 함수타입 ==> 반드시 타입명시필요.(타입추론안됨.)
  // 입력으로 받아오는타입, 그리고 return으로 내보내는 타입 이렇게 두개존재.
  // 띠라서 무엇으로 받을지를 기준으로 타입을 적어줌.왜냐, 호출하는사람 마음대로 바꿀 수 있어 해당의것을 받는 쪽에서 타입을 정함.(보내는쪽에서 해당 타입을 맞추게...)
  function add(num1: number, num2: number, unit: string): string {
    // 뒤쪽에 :string => 리턴타입
    return num1 + num2 + unit; // 여기타입.
  }
  const result = add(1000, 2000, "원"); // 결과의 리턴타입도 예측가능.
  // 계산을 위해서는 string이면 계산안됨.

  // 화살표함수시.
  const add2 = (num1: number, num2: number, unit: string): string => {
    // 뒤쪽에 :string => 리턴타입
    return num1 + num2 + unit; // 여기타입.
  };
  const result2 = add2(1000, 2000, "원");

  // any 타입 => 그냥 자바스크립트와 동일
  let qqq: any = "철수";
  qqq = 1244;
  qqq = true;

  return <></>;
}
