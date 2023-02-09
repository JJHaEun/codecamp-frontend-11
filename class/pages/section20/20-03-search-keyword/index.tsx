import { useQuery, gql } from "@apollo/client";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
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
  const [keyword, setKeyword] = useState("");
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
    setKeyword(value); // 검색한 결과를 담음.
  }, 500); // 0.5초 이 시간안에 추가입력 없을때 refetch api요청

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value); // 얘를 해당 함수의 인자로 내보내고
  };

  return (
    <div>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {/* 검색한 키워드 색바꾸기 => 해당 키워드를 기준으로 문장을 쪼개고, 해당 문장을 배열에 담음. 그리고 map으로 그림. 해당 키워드는 색을 변경
        1. 키워드 중심으로 문장 쪼개기,
        2. 키워드 저장할 state만들기
        3. 분리된 문장 map으로 뿌리고 각각의 el이 해당 키워드와 같으면 색 바뀌게...(강조색)
      */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
            {el.title
              .replaceAll(keyword, `@#$#@$@#${keyword}@#$#@$@#`)
              .split("@#$#@$@#")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "" }}
                >
                  {el}
                </span>
              ))}
          </span>
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
