// 컴포넌트 위에 만든이유: 컴포넌트가 리랜더링 될때 다시 만들어지는것 방지위해 ==> 효율적
const FRUITS = [
  { number: 1, title: "레드향" }, // <div>1 레드향</div>
  { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitsPage() {
  // 1. 가장 기본 예제
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓</div>,
    <div>3 산청딸기</div>,
  ];

  // FRUITS를 화면에 그려주기
  // 2. 실무 벡엔드 데이터 예제
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));
  return (
    <>
      <div>{aaa}</div>
      ======================
      <div>{bbb}</div>
      =================
      <div>
        {/* 3. 실무 효율적인 예제 */}
        {FRUITS.map(
          (
            el // 실무방법: 변수에 담아 사용하지 않고 html에서 바로작성(jsx에서 js를 적기위해 중괄호 필요.)
          ) => (
            <div>
              {el.number} {el.title}
            </div>
          )
        )}
      </div>
    </>
  );
}
