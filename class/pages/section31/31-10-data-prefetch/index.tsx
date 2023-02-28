import { useQuery, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
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
  console.log(data);
  const client = useApolloClient();
  const router = useRouter();

  const prefetchBoard = (boardId: string) => async () => {
    // 함수안에서는 useQuery안되니 useApolloClient하기
    await client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  };

  const onClickMove = (boardId: string) => (): void => {
    void router.push(`/section31/31-10-data-prefetch-moved/${boardId}`);
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span
            style={{ margin: "10px" }}
            onMouseOver={wrapAsync(prefetchBoard(el._id))}
            onClick={onClickMove(el._id)}
          >
            {el.title}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
