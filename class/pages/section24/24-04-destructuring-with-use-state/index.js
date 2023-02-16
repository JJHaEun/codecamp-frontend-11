import { useState } from "react";

export default function CounterStatePage() {
  // function onClick~~~~
  // function handleClick ~~~

  //   let count = 0  // let은 리엑트 전용 html에서 변경을 감지못함. 따라서 state사용해야함.
  const result = useState(0);
  function onClickCountUp() {
    result[1](result[0] + 1);
  }
  function onClickCountDown() {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </div>
  );
}
