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

const BackGroundColor = [
  "f29886",
  "f5f5dc",
  "ece6cc",
  "fff",
  "f89b00",
  "add826",
];
export default function LayoutBanner(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const { data: bestBoards } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );
  const onClickMove = (event: MouseEvent<HTMLElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveList = (): void => {
    void router.push(`/boards`);
  };

  const getRandomColor = (): string => {
    return (
      "#" + BackGroundColor[Math.floor(Math.random() * BackGroundColor.length)]
    );
  };

  return (
    <>
      <LayoutBannerUI
        onClickMove={onClickMove}
        onClickMoveList={onClickMoveList}
        data={data}
        bestBoards={bestBoards}
        getRandomColor={getRandomColor}
      />
    </>
  );
}
