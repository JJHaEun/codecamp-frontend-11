import { gql, useMutation, useQuery } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_Board = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OptimisticUiPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "63fdd761aef9f000281b2f96" },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_Board);

  const onClickLike = (): void => {
    void likeBoard({
      // 요청이 날라가면 기다리지 않곡 바로 캐시 수정일어나게함.
      variables: { boardId: "63fdd761aef9f000281b2f96" },
      optimisticResponse: {
        // 여기서 만들어낸다. 낙관적으로 어떤 응답을 받을거야 라고 넣어주는것. 실제값과 같이 넣어주면됨.
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          // 기존에 없던것을 추가함. cache.modify는 기존의 것 수정하는것.
          query: FETCH_BOARD,
          variables: { boardId: "63fdd761aef9f000281b2f96" },
          data: {
            fetchBoard: {
              // 캐시안에 fetchBoard를 바꾸고싶다. 어딴 게시글을?
              // 무엇을 바꾸고싶은가
              id: "63fdd761aef9f000281b2f96", // 얘도 반드시 들어가야하는것
              __typename: "Board", // 리턴으로 받아오는 타입이름임. 반드시 들어가야하는것
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!!</button>
    </>
  );
}
