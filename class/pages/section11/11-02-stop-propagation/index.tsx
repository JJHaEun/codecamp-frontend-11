import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import Checkbox from "./checkbox";

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

  // const onClickTitle = (event:MouseEvent<HTMLDivElement>) => {
  //   // if (event.target instanceof HTMLSpanElement)
  //   alert(`${event.currentTarget.id}님이 작성한 글입니다`);
  // };

  const qqq1 = () => {
    alert("1번클릭");
  };
  const qqq4 = (event) => {
    event.stopPropagation();
    alert("4번클릭");
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} onClick={qqq1} id={el.writer}>
          <Checkbox />
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>

          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
