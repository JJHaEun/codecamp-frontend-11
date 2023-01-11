import { useState } from "react";
import { ErrMassage } from "../../styles/02/02-signup-state";
export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
    if (email) {
      setEmailErr("");
    }
  }
  function onChangePassword1(event) {
    setPassword1(event.target.value);
    if (password1) {
      setPasswordErr("");
    }
  }
  function onChangePassword2(event) {
    setPassword2(event.target.value);
    if (password2) {
      setPasswordErr("");
    }
  }
  function onClickSignup() {
    if (!email.includes("@")) {
      setEmailErr("이메일에 @가 없습니다");
    }
    if (password1 !== password2) {
      setPasswordErr("비밀번호와 비밀번호확인이 다릅니다");
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <ErrMassage>{emailErr}</ErrMassage>
      비밀번호: <input type="password" onChange={onChangePassword1} />
      <ErrMassage>{passwordErr}</ErrMassage>
      비밀번호확인: <input type="password" onChange={onChangePassword2} />
      <ErrMassage>{passwordErr}</ErrMassage>
      <button onClick={onClickSignup}>가입하기</button>
    </>
  );
}
