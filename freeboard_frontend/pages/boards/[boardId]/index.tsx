import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentsList from "../../../src/components/units/boardComments/list/BoardCommentsList.container";
import BoardComments from "../../../src/components/units/boardComments/write/BoardCommentsWrite.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardComments />
      <BoardCommentsList />
    </>
  );
}
