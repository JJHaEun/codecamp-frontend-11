import { useState } from "react";

export default function StateCountPage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // let countUp = Number(document.getElementById("countUp").innerText) + 1;
    // document.getElementById("countUp").innerText = countUp;
    setCount(count + 1);
  }

  return (
    <>
      {/* <div id="countUp">0</div> */}
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트증가</button>
    </>
  );
}
