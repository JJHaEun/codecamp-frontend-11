import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  //   const mystyles = {
  //     margin:"10px"
  //   } 이런 객체형태로 작성하여 객체 이름이 바인딩되어 style={mystyles} 이렇게 작성되는 형태인데, 번거로우니 뒤에 중괄호 부분만 잘라 넣은형태가 style={{ margin: "10px" }}

  return (
    <div>
      {/* <div>작성자: {data?.fetchBoards.writer}</div>
      <div>제목: {data?.fetchBoards.title}</div>
      <div>내용: {data ? data.fetchBoards.contents : "로딩중입니다!!"}</div> */}
      {data?.fetchBoards.map((el) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          {/* inline요소여야 한줄로 보이게되니 span태그로 감싸줌 */}
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
