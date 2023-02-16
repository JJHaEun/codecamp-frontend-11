import { Modal } from "antd";
import { useRouter } from "next/router";
import type { ISignUpForm } from "../../../../units/signInUp/signUp/signUp.types";
import { useMutationCreateUser } from "../mutations/useMutationCreateUser";

interface IUseOnclickSignUp {
  onClickSignUp: (data: ISignUpForm) => Promise<void>;
}

export const useOnclickSignUp = (): IUseOnclickSignUp => {
  const [createUser] = useMutationCreateUser();
  const router = useRouter();

  const onClickSignUp = async (data: ISignUpForm): Promise<void> => {
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

  return {
    onClickSignUp,
  };
};
