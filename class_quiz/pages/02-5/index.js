import * as S from "../../styles/02/02-itsLoad";
import { useState } from "react";
export default function ItsLoadUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    if (email) {
      setEmailErr("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (password) {
      setPasswordErr("");
    }
  };
  const onClickSignIn = () => {
    if (!email.includes("@")) {
      setEmailErr("이메일 주소를 다시 확인해주세요.");
    }
    if (password.length < 8) {
      setPasswordErr("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
    }
  };
  return (
    <S.MainWrapper>
      <S.LocationLogo>
        <S.Location src="/location_02.png" />
        <S.Undderbar src="locationUnderbar.png" />
        <S.LogoTitle>잇츠로드</S.LogoTitle>
      </S.LocationLogo>

      <S.InPutLine
        type="text"
        placeholder="simplelife@gmail.com"
        onChange={onChangeEmail}
      />
      <S.CancelIcon src="/Cancel_icon.png" />

      <S.ErrMs>{emailErr}</S.ErrMs>

      <S.Inputs>
        <S.InPutLine
          type="password"
          placeholder="●●●●●●●●"
          onChange={onChangePassword}
        />
        <S.CancelIcon src="/Cancel_icon.png" />

        <S.ErrMs>{passwordErr}</S.ErrMs>
      </S.Inputs>
      <S.UndderSign>
        <S.LoginBt onClick={onClickSignIn}>로그인</S.LoginBt>
        <S.SearchTitle>
          <S.SearchName>이메일 찾기</S.SearchName>
          <S.PasswordSearch>비밀번호 찾기</S.PasswordSearch>
          <S.SearchName>회원가입</S.SearchName>
        </S.SearchTitle>
        <S.KakaoLogin>
          <S.KakaoIcon src="/kakaotalk-icon.png" /> 카카오톡으로 로그인
        </S.KakaoLogin>
      </S.UndderSign>
    </S.MainWrapper>
  );
}
