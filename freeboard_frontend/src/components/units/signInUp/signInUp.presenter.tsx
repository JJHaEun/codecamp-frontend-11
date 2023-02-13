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
            <S.LogInput
              type="email"
              id="email"
              placeholder="Email"
              ref={props.inputRef}
              onChange={
                props.signIn === true
                  ? props.onChangeSignIn
                  : props.onChangeInputs
              }
            />
          </div>
          <div>
            {!(props.signIn === true) && (
              <S.LogInput
                type="text"
                id="name"
                placeholder="Name"
                onChange={
                  props.signIn !== false
                    ? props.onChangeSignIn
                    : props.onChangeInputs
                }
              />
            )}
          </div>
          <div>
            <S.LogInput
              type="password"
              id="password"
              placeholder="Password"
              onChange={
                props.signIn === true
                  ? props.onChangeSignIn
                  : props.onChangeInputs
              }
            />
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
          <S.LogButton
            onClick={
              props.signIn === true ? props.onClickSignIn : props.onClickSignUp
            }
          >
            {props.signIn === true ? "로그인" : "회원가입"}
          </S.LogButton>
        </S.Inputs>
      </S.MainWrap>
    </S.LogWrap>
  );
}
