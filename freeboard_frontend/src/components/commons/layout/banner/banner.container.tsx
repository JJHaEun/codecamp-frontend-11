import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import LayoutBannerUI from "./banner.presenter";

export default function LayoutBanner(): JSX.Element {
  const router = useRouter();

  const onClickMove = (event: MouseEvent<HTMLImageElement>): void => {
    void router.push(`/${event.currentTarget.id}`);
  };

  return (
    <>
      <LayoutBannerUI onClickMove={onClickMove} />
    </>
  );
}
