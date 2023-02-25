import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { isAccessToken } from "../../../src/commons/stores";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(isAccessToken);
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);
  const [InputSignIn, setInputSignIn] = useState({
    email: "",
    password: "",
  });

  const onChangeSignIn = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputSignIn((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const onClickSignIn = async (): Promise<void> => {
    try {
      const result = await loginUserExample({
        variables: {
          ...InputSignIn,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      if (accessToken === undefined) {
        return;
      }
      setAccessToken(accessToken);
      void router.push(`/30/loginSuccess`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.info({ content: error.message });
      }
    }
  };

  return (
    <>
      <p>이메일</p>
      <input type="text" id="email" onChange={onChangeSignIn} />
      <p>PW</p>
      <input type="password" id="password" onChange={onChangeSignIn} />
      <button onClick={onClickSignIn}>로그인</button>
    </>
  );
}
