/* eslint-disable @typescript-eslint/consistent-type-assertions */

import { AppstoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter } from "next/router";
// import type { MouseEvent } from "react";
import LayoutSideBarUI from "./sidebar.presenter";
import type { MenuItem } from "./sidebar.types";

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
      [
        getItem("로그인", "/signIn"),
        getItem("회원가입", "/signUp"),
        getItem("출석", "/firebaseuse"),
      ],
      "group"
    ),
  ]),
];

export default function LayoutSideBar(): JSX.Element {
  const router = useRouter();
  // const onClickMove = (event: MouseEvent<HTMLSpanElement>): void => {
  //   void router.push(`/${event.currentTarget.id}`);
  // };
  const onClickMove: MenuProps["onClick"] = (event) => {
    void router.push(event.key);
  };
  return (
    <>
      <LayoutSideBarUI onClickMove={onClickMove} items={items} />
    </>
  );
}
