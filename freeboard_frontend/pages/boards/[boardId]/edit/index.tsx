import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  return (
    <>
      <BoardWrite isEdit={true} data={data} />
    </>
  );
}
