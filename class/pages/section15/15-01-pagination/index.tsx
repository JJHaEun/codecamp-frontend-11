import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
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

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) }); // 아래쪽에서 변수에 담거나 하는것이 없으니 async / await로 기다릴 필요는 없기에 void
    // -> 어차피 알아서 보여주지만, 결과를 변수에 담고
    //    , 찍어보는것을 할 경우에는 받아오는게 끝나야가능하기때문에 async/await를 사용하는것.
  };

  //   const onClickPage1 = (event:MouseEvent<HTMLSpanElement>): void => {
  //     void refetch({ page: Number(event.currentTarget.id)}); // 아래쪽에서 변수에 담거나 하는것이 없으니 async / await로 기다릴 필요는 없기에 void
  //     // -> 어차피 알아서 보여주지만, 결과를 변수에 담고
  //     //    , 찍어보는것을 할 경우에는 받아오는게 끝나야가능하기때문에 async/await를 사용하는것.
  //   };

  //   const onClickPage2 = (event:MouseEvent<HTMLSpanElement>): void => {
  //     void refetch({  page: Number(event.currentTarget.id)}); // html것을 받아오는것이니 항상 text. 따라서 Number로 바꾸기
  //   };
  //   const onClickPage3 = (event:MouseEvent<HTMLSpanElement>): void => {
  //     void refetch({  page: Number(event.currentTarget.id)});
  //   };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          {/* inline요소여야 한줄로 보이게되니 span태그로 감싸줌 */}
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {/* // 배열요소를 10개 만들고 1로 채움.(사실상 인덱스만 사용하기에 무엇으로 채워도 관계없음) */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
      {/* {
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (
            _, // 안쓰는 값에대해서는 언더바('_')로 표기
            index // 맵에는 인덱스가 들어옴. 이 인덱스를 활용해 배열을 만들면...
          ) => (
            // 인덱스는  0 ~ 9 // 여기서 인덱스 +1 ==> 1 ~ 0  인덱스를 사용하니 배열에는 아무거나 들어가도 상관없음.
            <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
              {index + 1}
            </span>
          )
        )
      } */}
      {/*  //  여기에 자바스크립트를 사용할경우 중괄호로 묶어야함. 아니면 문자열로 인식함 */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => ( //각 페이지의 아이디었던 것을 배열로 넣어 map으로 뿌림.
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}
      {/* <span id="1" onClick={onClickPage1}>1</span>
      <span id="2" onClick={onClickPage2}>2</span>
      <span id="3" onClick={onClickPage3}>3</span> */}
    </div>
  );
}
