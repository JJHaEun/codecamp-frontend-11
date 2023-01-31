import { useQuery, gql } from "@apollo/client";

import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/components/units/16-comment-item";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <CommentItem key={el._id} el={el} />
        // map을 통해 각 다른 컴포넌트를 뿌릴 수있음.
        // state도 따로 가지게됨. map으로 뿌리기에 각 다른 컴포넌트임.
        // 위의 컴포넌트가 맵으로 뿌린 개수만큼 있는것. 따라서 isEdit라는것이 이름은 같으나, 클릭한 isEdit만 true로 바뀌어 변하게 된다.(각기 자기 자신의 컴포넌트 부분만 바뀌니까.)
      ))}
    </div>
  );
}
