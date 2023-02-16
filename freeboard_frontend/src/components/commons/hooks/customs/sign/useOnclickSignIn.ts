import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores";
import type { ISignForm } from "../../../../units/signInUp/signIn/signIn.types";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";

interface IUseonclickSignIn {
  onClickSignIn: (data: ISignForm) => Promise<void>;
}

export const useOnclickSignIn = (): IUseonclickSignIn => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();
  const router = useRouter();

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
  return {
    onClickSignIn,
  };
};
