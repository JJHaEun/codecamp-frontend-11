import { useState } from "react";

export default function RandomNumber() {
  const [random, setRandom] = useState("000000");
  //   function onClickRandomNumber() {
  //     let randomNumber = (document.getElementById("number").innerText = String(
  //       Math.floor(Math.random() * 1000000)
  //     ).padStart(6, "0"));
  //     document.getElementById("number").innerText = randomNumber;
  //   }

  const onClickRandomNumber = () => {
    setRandom(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  };
  return (
    <>
      {/* <div id="number">000000</div> */}
      <div>{random}</div>

      <button onClick={onClickRandomNumber}>인증번호전송</button>
    </>
  );
}
