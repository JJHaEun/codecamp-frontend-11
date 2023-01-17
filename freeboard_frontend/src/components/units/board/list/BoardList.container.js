import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const onClickDetailPage = (event) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = () => {
    router.push(`/boards/new`);
  };
  return (
    <>
      <BoardListUI
        data={data}
        onClickDetailPage={onClickDetailPage}
        onClickCreateBoard={onClickCreateBoard}
      />
    </>
  );
}
