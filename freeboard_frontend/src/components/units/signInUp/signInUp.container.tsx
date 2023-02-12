import { useMutation } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import SignInUpUI from "./signInUp.presenter";
import type { ISignInUpProps } from "./signInUp.types";
import { CREATE_USER, LOGIN_USER } from "./signUp.quries";
import { useRouter } from "next/router";

export default function SignInUp(props: ISignInUpProps): JSX.Element {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [InputsignIn, setInputSignIn] = useState({
    email: "",
    password: "",
  });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,

      [event.target.id]: event.target.value,
    }));
  };

  const onChangeSignIn = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputSignIn((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  const onClickSignIn = async (): Promise<void> => {
    await loginUser({
      variables: {
        ...InputsignIn,
      },
    });
  };
  const onClickSignUp = async (): Promise<void> => {
    await createUser({
      variables: {
        createUserInput: {
          ...inputs,
        },
      },
    });
  };

  const onClickMoveSignIn = (): void => {
    void router.push(`/signIn`);
  };
  const onClickMoveSignUp = (): void => {
    void router.push(`/signUp`);
  };
  return (
    <>
      <SignInUpUI
        onChangeInputs={onChangeInputs}
        onClickSignUp={onClickSignUp}
        signIn={props.signIn}
        onChangeSignIn={onChangeSignIn}
        onClickSignIn={onClickSignIn}
        inputRef={inputRef}
        onClickMoveSignIn={onClickMoveSignIn}
        onClickMoveSignUp={onClickMoveSignUp}
      />
    </>
  );
}
