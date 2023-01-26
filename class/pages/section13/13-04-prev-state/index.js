import { useState } from "react";

export default function CounterLetDocumentPage() {
  // let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서, state 써야됨)
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // setCount(count + 1); // 함수가 끝날때까지는 변경 x
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1); // 마지막 값이 나옴. ==> 1

    setCount((prev) => prev + 1); // 0 + 1 // 임시 저장공간의 값을 가져옴. 없으면 실제 카운트값 가져옴.
    setCount((prev) => prev + 1); // 1 + 1
    setCount((prev) => prev + 1); // 2 + 1
    setCount((prev) => prev + 1); // 3 + 1  => 따라서 카온트 올리기 버튼 누르면 4씩 증가.
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기!!!</button> */}
    </div>
  );
}
