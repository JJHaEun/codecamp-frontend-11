import { useQuery, gql } from "@apollo/client";
// import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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

export default function MapBoardPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (page: number) => (): void => {
    //   void refetch({ page: Number(event.currentTarget.id) }); // 아래쪽에서 변수에 담거나 하는것이 없으니 async / await로 기다릴 필요는 없기에 void
    void refetch({ page }); // 아래쪽에서 변수에 담거나 하는것이 없으니 async / await로 기다릴 필요는 없기에 void
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + 1}
          //   id={String(index + 1)}
          onClick={
            onClickPage(index + 1) // id를 직접 함수로 넣어줌.

            // 원래는 여기에 소괗호 하나 더 있어야하지만 js에서 자동으로 event를 넣어주니 생략
            // event는 뒤쪽에 들어옴!!
          }
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
