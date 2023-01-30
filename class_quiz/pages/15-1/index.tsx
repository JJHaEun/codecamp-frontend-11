import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
// import styled from "@emotion/styled";
import * as S from "./15-1-styles";
import type { MouseEvent } from "react";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function FetchBoardPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [choicePage, setChoicePage] = useState(1);
  const [isNonActive, setIsNoneActive] = useState(false);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });

  const { data: countBoards } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((countBoards?.fetchBoardsCount ?? 10) / 10);
  const restPage = lastPage % 10; // lastPage를 다시 10으로 나눈 나머지 페이지를 구해 lastPage에서 이것을 뺀 부분보다  다음 10 페이지가 크다면.. 다음 버튼 안나오게??

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const currentPage = Number(event.currentTarget.id);
    setChoicePage(currentPage);
    void refetch({ page: currentPage });
  };

  const onClickMovePrv = (): void => {
    setIsNoneActive(false);

    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickMoveNext = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
    if (startPage + 10 > lastPage - restPage) {
      setIsNoneActive(true);
    }
  };

  return (
    <S.Wrap>
      <S.ListWrap>
        <S.Row>
          <S.BoardN>번호</S.BoardN>
          <S.Title>제목</S.Title>
          <S.Writer>작성자</S.Writer>
        </S.Row>
        {data?.fetchBoards?.map((el) => (
          <S.Row key={el._id}>
            <S.BoardN>{el._id.substring(el._id.length - 4)}</S.BoardN>
            <S.Title>{el.title}</S.Title>
            <S.Writer>{el.writer}</S.Writer>
          </S.Row>
        ))}
      </S.ListWrap>
      <S.PageNationWrap>
        <S.MoveBt onClick={onClickMovePrv}>
          <LeftCircleOutlined />
        </S.MoveBt>
        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <S.NowChoice
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPage}
                isActive={startPage + index === choicePage}
              >
                {index + startPage}
              </S.NowChoice>
            )
        )}
        <S.Movenext
          onClick={onClickMoveNext}
          disabled={isNonActive}
          // disabled={!(startPage + 10 <= lastPage)}
        >
          <RightCircleOutlined />
        </S.Movenext>
      </S.PageNationWrap>
    </S.Wrap>
  );
}
