import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_COUNT } from "../../../units/board/list/BoardList.queries";
import LayoutBannerUI from "./banner.presenter";
import { FETCH_BOARDS_OF_THE_BEST } from "./banner.query";

export default function LayoutBanner(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  const { data: bestBoards } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );
  const onClickMove = (event: MouseEvent<HTMLImageElement>): void => {
    void router.push(`/${event.currentTarget.id}`);
  };

  return (
    <>
      <LayoutBannerUI
        onClickMove={onClickMove}
        data={data}
        bestBoards={bestBoards}
      />
    </>
  );
}
