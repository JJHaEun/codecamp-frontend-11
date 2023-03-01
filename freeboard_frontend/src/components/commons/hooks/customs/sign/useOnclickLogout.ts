import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import type { IMutation } from "../../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const useOnClickLogOut = () => {
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const onClickLogout = async () => {
    await logoutUser();
    Modal.success({ title: "로그아웃성공", content: "로그아웃되었습니다" });
    window.location.reload();
  };
  return {
    onClickLogout,
  };
};
