import type { ISignInUpUIProps } from "./signInUp.types";
import * as S from "./signInUp.styles";
export default function SignInUpUI(props: ISignInUpUIProps): JSX.Element {
  return (
    <S.LogWrap>
      <S.LogPageLogo>느린하루</S.LogPageLogo>
      <S.MainWrap>
        <S.Title>{props.signIn === true ? "Sign In" : "Sign Up"}</S.Title>
        <S.Inputs>
          <div>
            <S.LogInput type="email" placeholder="Email" ref={props.inputRef} />
          </div>
          <div>
            {!(props.signIn === true) && (
              <S.LogInput type="text" placeholder="Name" />
            )}
          </div>
          <div>
            <S.LogInput type="password" placeholder="Password" />
          </div>
          <S.Sub
            onClick={
              props.signIn === true
                ? props.onClickMoveSignUp
                : props.onClickMoveSignIn
            }
          >
            {props.signIn === true
              ? "아직 회원이 아니신가요?"
              : "이미 아이디가 있으신가요?"}
          </S.Sub>
          <S.LogButton>
            {props.signIn === true ? "로그인" : "회원가입"}
          </S.LogButton>
        </S.Inputs>
      </S.MainWrap>
    </S.LogWrap>
  );
}
