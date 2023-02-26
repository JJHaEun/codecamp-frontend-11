import { useRouter } from "next/router";
import { useState } from "react";
import type { MouseEvent } from "react";
import LayoutHeader from "./header.presenter";
import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "./header.queries";
import type { IQuery } from "../../../../commons/types/generated/types";

const items2: MenuProps["items"] = [
  {
    label: "커뮤니티",
    key: "/boards",
    icon: <MailOutlined />,
  },
  {
    label: "로그인",
    key: "/signIn",
    // icon: <MailOutlined />,
  },
  {
    label: "회원가입",
    key: "/signUp",
    // icon: <MailOutlined />,
  },
  {
    label: "오늘의 한줄",
    key: "/firebaseuse",
    // icon: <MailOutlined />,
  },

  {
    label: "마켓",
    key: "/market",
    // icon: <MailOutlined />,
  },
  {
    label: "마이페이지",
    key: "/myPage",
  },
];
export default function LayoutHeaderWrap(): JSX.Element {
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
  const onClickMenu: MenuProps["onClick"] = (event) => {
    void router.push(event.key);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    void router.push(e.key);
  };

  const onClickMain = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };
  return (
    <>
      <LayoutHeader
        onClickMenu={onClickMenu}
        onClickMain={onClickMain}
        onClick={onClick}
        items2={items2}
        current={current}
        data={data}
      />
    </>
  );
}
