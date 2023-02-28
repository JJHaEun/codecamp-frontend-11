import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  console.log(router); // router의 기능들 보기 (router은 주소관련된것..)
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.qqq },
  });
  console.log(data);

  return (
    <>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );
}
