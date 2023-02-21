import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isAccessToken } from "../../../../src/commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../src/commons/types/generated/types";

const LOG_IN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
interface FromType {
  password: string;
  email: string;
}
export default function PaymentLoginPage(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FromType>();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOG_IN_USER);
  const [, setAccessToken] = useRecoilState(isAccessToken);

  const onClickSubmit = async (data: FromType): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        Modal.error({ content: "다시 시도해주세요" });
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      void router.push(`/28/payment/loading`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <input type="text" placeholder="이메일" {...register("email")} />
      <input type="password" placeholder="비밀번호" {...register("password")} />
      <button>로그인</button>
    </form>
  );
}
