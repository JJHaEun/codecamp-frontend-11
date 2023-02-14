import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder="아이디"
        id="email"
        onChange={props.onChangeLogin}
      />
      <input
        type="password"
        id="password"
        placeholder="비밀번호"
        onChange={props.onChangeLogin}
      />
      <button onClick={props.onClickLogin}>로그인</button>
    </>
  );
}
