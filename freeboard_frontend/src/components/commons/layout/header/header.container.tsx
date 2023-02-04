import { useRouter } from "next/router";
import { useState } from "react";
import type { MouseEvent } from "react";
import LayoutHeader from "./header.presenter";

export default function LayoutHeaderWrap(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickMenu = (event: MouseEvent<HTMLSpanElement>): void => {
    void router.push(event.currentTarget.id);
  };

  const onClickOpenRightMenu = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onClickMain = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };
  return (
    <>
      <LayoutHeader
        onClickMenu={onClickMenu}
        onClickOpenRightMenu={onClickOpenRightMenu}
        isOpen={isOpen}
        onClickMain={onClickMain}
      />
    </>
  );
}
