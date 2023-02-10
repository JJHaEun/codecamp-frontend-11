export default function MapElPage(): JSX.Element {
  // 첫번째. 기본 방식
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  // 2번째. 함수의 매개변수 바꿔보기
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("el:", asdf);
    console.log("index:", qwer);
  });

  // 3. 함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("el:", asdf);
    console.log("index:", qwer);
  });

  // 네번째. el과 index바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  return <></>;
}
