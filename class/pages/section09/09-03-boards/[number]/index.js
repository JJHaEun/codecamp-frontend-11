import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router); // router의 기능들 보기 (router은 주소관련된것..) // router의 query부분에 주소로 넣어준 변수가 문자열로 들어있음
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }, // 해당 주소에 맞는 데이터들을 불러옴
  });
  console.log(data);
  console.log(router.query.number); // 해당 게시를 번호를 받아올 수 있음.
  const onClickMove = () => [
    // 수정하기로 이동.
    router.push(`/section09/09-03-boards/${router.query.number}/edit`),
  ];

  return (
    <>
      <div>{router.query.number}번 게시글 이동이 완료되었습니다</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>수정하러가기</button>
    </>
  );
}
