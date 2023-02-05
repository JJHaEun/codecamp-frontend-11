import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import LayoutSideBarUI from "./sidebar.presenter";

export default function LayoutSideBar(): JSX.Element {
  const router = useRouter();
  const onClickMove = (event: MouseEvent<HTMLSpanElement>): void => {
    void router.push(`/${event.currentTarget.id}`);
  };
  return (
    <>
      <LayoutSideBarUI onClickMove={onClickMove} />
    </>
  );
}
