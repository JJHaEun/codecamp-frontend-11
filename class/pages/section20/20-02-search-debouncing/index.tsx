import { useQuery, gql } from "@apollo/client";
// import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage(): JSX.Element {
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) }); // 검색에서 refetch를 할때 search검색어가 refetch에 이미 저장되어 있는 상태기에
    // 여기서 추가로 search포함하지 않아도됨
  };

  const getDebounce = _.debounce((value) => {
    /// 매개변수 value라는 이름으로 인자를 받아 사용
    void refetch({ search: value, page: 1 }); // 버튼 없이 검색하기  ==> 문제: 검색한글자 입력시마다 뮤테이션 계속 날라감 ==> 트래픽 많아짐. 비용, 성능적으로 좋지 않음.
  }, 500); // 0.5초 이 시간안에 추가입력 없을때 refetch api요청

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value); // 얘를 해당 함수의 인자로 내보내고
  };

  // const onClickSearch = (): void => {
  //   // 검색하기 클릭 => 검색목록 리패치
  //   // 뮤테이션 보내고 리페티 할때는 refetchQueries, 그냥 할때는 refetch
  //   void refetch({
  //     search,
  //     // 검색한 결과의 첫페이지부터 나오게..
  //     page: 1,
  //   });
  // };
  return (
    <div>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
