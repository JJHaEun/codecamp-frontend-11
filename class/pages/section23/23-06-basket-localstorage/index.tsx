// 비회원 장바구니 만들기.
// 상품목록에서 클릭하면 로컬 스토리지에 저장되게

import { useQuery, gql } from "@apollo/client";
import type {
  IBoard,
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

  const onClickBasket = (basket: IBoard) => (): void => {
    // onClickBasket(el)의 el을 basket이라는 이름으로(파라미터=매개변수)로 받음
    // 1. 기존 장바구니 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
      // 없으면 빈배열이라도 가져옴, 있으면 해당키의 배열을...
    );
    // 로컬 들어가면(로컬에서는 문지열로 저장됨)문자열로 바뀜 따라서 자바스크립트 객체로 바꿔주어야함

    // 1-1 담기전에 검증하기
    const temp = baskets.filter((el) => el._id === basket._id);
    // 기존 배열에 id가 클릭한 아이디와 같은지검증해 같으면 return처리
    if (temp.length >= 1) {
      // 1개이상이되면 지금 선택된거랑 원래 로컬에 담긴거랑 겹친다는것.
      alert("이미 담겨있는 상품입니다");
      return;
    }

    // 2. 내가 클릭한것 담기
    // console.log(basket);
    baskets.push(basket);

    // 3.추가된 장바구니 변경하기
    // 객체를 문자열로 바꾸어야 로컬스토리지에 넣을수있음. 따라서 JSON.stringify 를 사용해 문자열로 바꾸기.
    localStorage.setItem("baskets", JSON.stringify(baskets)); // ==> 문제점: 다른것을 클릭하면 추가가아니라 덮어쓰기되어 기존것이 바꿈
    // 기존값을 가져오고, 클릭한값을 넣어주고,
  };

  // 만약 장바구니 페이지에서 가져오기 만들려면
  // localStorage.getItem() => 프리랜더링시 에러
  // 따라서 useEffect사용

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          {/* inline요소여야 한줄로 보이게되니 span태그로 감싸줌 */}
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          {/* // el(객체임)을 전부 string으로 변경해 id로 넣는다. */}
          {/* <button id={JSON.stringify(el)} onClick={}>장바구니 담기</button> */}
          {/* el을 localStorage에 넣기 */}

          {/*  el자체를 hof로 넘겨준다. */}
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
