import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isAccessToken } from "../../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.query";

export default function Login(): JSX.Element {
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(isAccessToken);
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const onChangeLogin = (event: ChangeEvent<HTMLInputElement>): void => {
    setLoginInputs((prev) => ({
      ...prev,
      [event.target?.id]: event.target?.value,
    }));
  };
  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          ...loginInputs,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      void router.push(`/23/hoc/main`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LoginUI onChangeLogin={onChangeLogin} onClickLogin={onClickLogin} />
    </>
  );
}
