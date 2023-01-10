import { useState } from "react";

export default function StateTextChangePage() {
  //   const [greeting, setGreeting] = useState("안녕하세요");

  const onClickGreet = () => {
    // setGreeting("반갑습니다");
    let greeting = (document.getElementById("hi").innerText = "반갑습니다");
    document.getElementById("hi").innerText = greeting;
  };
  return (
    <>
      {/* <button onClick={onClickGreet}>{greeting}</button> */}
      <button id="hi" onClick={onClickGreet}>
        안녕하세요
      </button>
    </>
  );
}
