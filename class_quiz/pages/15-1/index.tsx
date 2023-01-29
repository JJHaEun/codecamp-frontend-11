import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IBoardReturn,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
    }
  }
`;

const ListWrap = styled.div`
  width: 1200px;
`;
const Row = styled.div`
  display: flex;
  border-bottom: 1px solid orangered;
`;
const Number = styled.div`
  width: 10%;
`;
const Title = styled(Number)`
  width: 70%;
`;
const Writer = styled(Number)`
  width: 20%;
`;
export default function FetchBoardPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <ListWrap>
      <Row>
        <Number>번호</Number>
        <Title>제목</Title>
        <Writer>작성자</Writer>
      </Row>
      {data?.fetchBoards?.map((el: IBoardReturn) => (
        <Row key={el.number}>
          <Number>{el.number}</Number>
          <Title>{el.title}</Title>
          <Writer>{el.writer}</Writer>
        </Row>
      ))}
    </ListWrap>
  );
}
