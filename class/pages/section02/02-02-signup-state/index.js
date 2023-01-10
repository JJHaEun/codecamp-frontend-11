import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    console.log(event); // 내가 한 행동
    console.log(event.target); // 작동된 태그
    console.log(event.target.value); // 작동된 태그에 입력된 값이 출력
    setEmail(event.target.value); // 입력한 값을 저장.  ==> 입력할때마다 매번 실행되며 마지막것이 최종적으로 저장된다.
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onClickSignup(event) {
    console.log(email); // 진짜 포장이 잘 되엇는지 확인해보기
    console.log(password); // 진짜 포장이 잘 되엇는지 확인해보기
    // 1. 검증하기
    if (email.includes("@") === false) {
      // 이메일에 @ 없을경우
      //   alert("이메일 형식에 맞지 않습니다 @가 없음!!");
      //   document.getElementById("myerror").innerText =
      // "이메일 형식에 맞지 않습니다 @가 없음!!";    ==> 옛날 방식
      setEmailError("이메일 형식에 맞지 않습니다 @가 없음!");
    } else if (password.length !== 8) {
      setPasswordError("영문, 특수문자, 숫자를 포함한 8자리 입니다");
    } else {
      // 2. 벡엔드 컴퓨터에 보내주기(벡엔드 개발자가 만든함수. 즉 API)
      //      => 나중에

      // 3. 성공알람 보여주기
      alert("회원가입을 축하합니다!!");
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      {/* <div id="myerror"></div> ==> 옛날 방식  */}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <div>{passwordError}</div>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
