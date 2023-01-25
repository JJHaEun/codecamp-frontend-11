import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

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

  const onClickTitle = (event) => {
    // if (event.target instanceof HTMLSpanElement)
    alert(`${event.currentTarget.id}님이 작성한 글입니다`);
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} onClick={onClickTitle} id={el.writer}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>

          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
