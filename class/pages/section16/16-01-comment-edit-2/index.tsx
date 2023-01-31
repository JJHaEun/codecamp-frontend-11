import { useQuery, gql } from "@apollo/client";
import type { MouseEvent } from "react";
import { useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]); // 여러게 수정하기 위해 배열에..

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    // 클릭한 인덱스를 저장..
    // 클릭시에 true로 변경
    const qqq = myIndex;
    qqq[Number(event.currentTarget.id)] = true; // 내가 선택한 인덱스를 true로 변경
    setMyIndex([...qqq]);
    console.log(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          // false라면 기본값. true라면 input창
          <div key={el._id}>
            {/* inline요소여야 한줄로 보이게되니 span태그로 감싸줌 */}
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
    </div>
  );
}
