import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";

import type { IBoardListProps } from "./BoardList.types";
// import PagiNationPage from "../../../commons/pagination/boardsPagination/pagination.container";

export default function BoardList(props: IBoardListProps): JSX.Element {
  const router = useRouter();

  const onClickDetailPage = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = (): void => {
    void router.push(`/boards/new`);
  };
  return (
    <>
      <BoardListUI
        data={props.data}
        onClickDetailPage={onClickDetailPage}
        onClickCreateBoard={onClickCreateBoard}
        refetch={props.refetch}
      />
    </>
  );
}
