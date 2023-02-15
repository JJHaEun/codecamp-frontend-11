import { useMutation } from "@apollo/client";
import { useEffect, useRef } from "react";
import type {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import SignInUpUI from "./signInUp.presenter";
import type { ISignForm, ISignInUpProps } from "./signInUp.types";
import { CREATE_USER, LOGIN_USER } from "./signUp.quries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../commons/libraries/validations/signValidation";
import { wrapAsync } from "../../../commons/libraries/asyncFunc";

export default function SignInUp(props: ISignInUpProps): JSX.Element {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { register, handleSubmit, formState } = useForm<ISignForm>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const inputRef = useRef<HTMLInputElement>(null);

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

  const onClickSignIn = async (data: ISignForm): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요" });
        return;
      }

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); // 임시사용
      void router.push(`/`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickSignUp = async (data: Required<ISignForm>): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      console.log(result.data?.createUser._id);
      Modal.success({ content: "회원가입을 축하합니다!!" });
      void router.push(`/signIn`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
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
        onClickSignUp={wrapAsync(onClickSignUp)}
        signIn={props.signIn}
        onClickSignIn={wrapAsync(onClickSignIn)}
        inputRef={inputRef}
        onClickMoveSignIn={onClickMoveSignIn}
        onClickMoveSignUp={onClickMoveSignUp}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
// import { useMutation } from "@apollo/client";
// import { useEffect, useRef, useState } from "react";
// import type { ChangeEvent } from "react";
// import type {
//   IMutation,
//   IMutationCreateUserArgs,
//   IMutationLoginUserArgs,
// } from "../../../commons/types/generated/types";
// import SignInUpUI from "./signInUp.presenter";
// import type { ISignInUpProps } from "./signInUp.types";
// import { CREATE_USER, LOGIN_USER } from "./signUp.quries";
// import { useRouter } from "next/router";
// import { Modal } from "antd";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../../commons/stores";
// export default function SignInUp(props: ISignInUpProps): JSX.Element {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const router = useRouter();
//   const [, setAccessToken] = useRecoilState(accessTokenState);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//     name: "",
//   });
//   const [InputsignIn, setInputSignIn] = useState({
//     email: "",
//     password: "",
//   });
//   const [loginUser] = useMutation<
//     Pick<IMutation, "loginUser">,
//     IMutationLoginUserArgs
//   >(LOGIN_USER);
//   const [createUser] = useMutation<
//     Pick<IMutation, "createUser">,
//     IMutationCreateUserArgs
//   >(CREATE_USER);
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);
//   const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
//     setInputs((prev) => ({
//       ...prev,
//       [event.target.id]: event.target.value,
//     }));
//   };
//   const onChangeSignIn = (event: ChangeEvent<HTMLInputElement>): void => {
//     setInputSignIn((prev) => ({
//       ...prev,
//       [event.target.id]: event.target.value,
//     }));
//   };
//   const onClickSignIn = async (): Promise<void> => {
//     try {
//       const result = await loginUser({
//         variables: {
//           ...InputsignIn,
//         },
//       });
//       console.log(result.data?.loginUser.accessToken);
//       const accessToken = result.data?.loginUser.accessToken;
//       if (accessToken === undefined) {
//         Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요" });
//         return;
//       }

//       setAccessToken(accessToken);
//       localStorage.setItem("accessToken", accessToken); // 임시사용
//       void router.push(`/`);
//     } catch (error) {
//       if (error instanceof Error) Modal.error({ content: error.message });
//     }
//   };
//   const onClickSignUp = async (): Promise<void> => {
//     try {
//       const result = await createUser({
//         variables: {
//           createUserInput: {
//             ...inputs,
//           },
//         },
//       });
//       console.log(result.data?.createUser._id);
//       Modal.success({ content: "회원가입을 축하합니다!!" });
//       void router.push(`/signIn`);
//     } catch (error) {
//       if (error instanceof Error) Modal.error({ content: error.message });
//     }
//   };
//   const onClickMoveSignIn = (): void => {
//     void router.push(`/signIn`);
//   };
//   const onClickMoveSignUp = (): void => {
//     void router.push(`/signUp`);
//   };
//   return (
//     <>
//       <SignInUpUI
//         onChangeInputs={onChangeInputs}
//         onClickSignUp={onClickSignUp}
//         signIn={props.signIn}
//         onChangeSignIn={onChangeSignIn}
//         onClickSignIn={onClickSignIn}
//         inputRef={inputRef}
//         onClickMoveSignIn={onClickMoveSignIn}
//         onClickMoveSignUp={onClickMoveSignUp}
//       />
//     </>
//   );
// }
