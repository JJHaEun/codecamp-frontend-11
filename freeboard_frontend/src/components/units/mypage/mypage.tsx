import { yupResolver } from "@hookform/resolvers/yup";
import { Badge, Modal } from "antd";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { getDate } from "../../../commons/libraries/date";
import { schema } from "../../../commons/libraries/validations/passwordValidation";
import { isOpenState } from "../../../commons/stores";
import { useOnClickResetPW } from "../../commons/hooks/customs/market/onClickUseResetPW";
import { useToggleModal } from "../../commons/hooks/customs/market/useToggleModal";

import { useQueryFetchUsedItemsCountIPicked } from "../../commons/hooks/customs/quries/useQueryFetchUsedItemsCountIPicked";
import { useQueryFetchUserLoggedIn } from "../../commons/hooks/customs/quries/useQueryFetchUserLoggedIn";
import { useOnClickLogOut } from "../../commons/hooks/customs/sign/useOnclickLogout";
import type { PasswordForm } from "./point/point.types";
export default function MyPageMyInFo(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();
  const { onClickLogout } = useOnClickLogOut();
  const { IPicked } = useQueryFetchUsedItemsCountIPicked();
  const { ToggleModal } = useToggleModal();
  const [isOpen] = useRecoilState(isOpenState);
  const { onClickResetPassword } = useOnClickResetPW();

  const { register, handleSubmit, formState } = useForm<PasswordForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <>
      {isOpen && (
        <Modal open={true} onOk={ToggleModal} onCancel={ToggleModal}>
          <input type="password" {...register("password")} />
          <div>{formState.errors.password?.message}</div>
          <button onClick={handleSubmit(onClickResetPassword)}>변경</button>
        </Modal>
      )}
      <div>
        <h1>{data?.fetchUserLoggedIn.name}님</h1>

        <div>
          <span>{data?.fetchUserLoggedIn.name}</span>
          <span>{data?.fetchUserLoggedIn.email}</span>
        </div>
        <div>
          <div>{getDate(data?.fetchUserLoggedIn?.createdAt)}</div>
          <div>{getDate(data?.fetchUserLoggedIn?.updatedAt)}</div>
        </div>
        <Badge count={IPicked?.fetchUseditemsCountIPicked} overflowCount={10}>
          <div>나는네모다</div>
        </Badge>
        <div>
          <Link href={`/myPage/editMyInfo`}>
            <a>내 정보 수정하기</a>
          </Link>
          <button onClick={ToggleModal}>비밀번호 변경하기</button>
        </div>
        <button onClick={onClickLogout}>로그아웃</button>
      </div>
    </>
  );
}
