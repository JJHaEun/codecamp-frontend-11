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
  const [myIndex, setMyIndex] = useState(-1); // 처음에는 아무것도 변하는것 없게..(인덱스는 0부터 시작이니...)
  console.log(data);
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    // 클릭한 인덱스를 저장..
    setMyIndex(Number(event.currentTarget.id)); // html에서 가져오는것이니 String형식. 필요한것은 숫자이니 다시 숫자로 바꾸기
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index !== myIndex ? (
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
