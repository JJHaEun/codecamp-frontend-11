/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useRouter } from "next/router";
import { useState } from "react";
import type { MouseEvent } from "react";
import LayoutHeader from "./header.presenter";
import type { MenuItem } from "./header.types";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return { key, icon, children, label, type } as MenuItem;
};
const items: MenuProps["items"] = [
  getItem("Menu", "sub1", <AppstoreOutlined />, [
    getItem(
      "Main",
      "g1",
      null,
      [getItem("커뮤니티", "/boards"), getItem("마켓", "/markets")],
      "group"
    ),
    getItem(
      "Sub",
      "g2",
      null,
      [getItem("로그인", "/signIn"), getItem("회원가입", "/signUp")],
      "group"
    ),
  ]),
];
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
];
export default function LayoutHeaderWrap(): JSX.Element {
  const router = useRouter();
  const [current, setCurrent] = useState("");

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
        items={items}
        onClickMain={onClickMain}
        onClick={onClick}
        items2={items2}
        current={current}
      />
    </>
  );
}
