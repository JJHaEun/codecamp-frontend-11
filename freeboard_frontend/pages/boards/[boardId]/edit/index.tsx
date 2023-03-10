/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

export default function BoardEditPage(): JSX.Element {
  const router = useRouter();

  if (!router || typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );
  return (
    <>
      <BoardWrite isEdit={true} data={data} />
    </>
  );
}
