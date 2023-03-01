import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../../commons/stores";
import type { PasswordForm } from "../../../../units/mypage/point/point.types";
import { FETCH_USER_LOGGEDIN } from "../../../layout/header/header.queries";
import { useMutationResetPassword } from "../mutations/useMutationResrtPW";

export const useOnClickResetPW = () => {
  const [, setIsOpen] = useRecoilState(isOpenState);

  const [resetUserPassword] = useMutationResetPassword();
  const onClickResetPassword = async (data: PasswordForm) => {
    try {
      await resetUserPassword({
        variables: {
          password: data.password,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
        ],
      });
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickResetPassword,
  };
};
