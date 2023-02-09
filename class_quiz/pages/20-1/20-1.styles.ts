import styled from "@emotion/styled";

interface IPageNumberProps {
  isActive: boolean;
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ListWrap = styled.div`
  width: 1000px;
`;
export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid orangered;
`;
export const BoardN = styled.div`
  width: 10%;
  margin-right: 50px;
`;
export const Title = styled(BoardN)`
  width: 70%;
`;
export const Writer = styled(BoardN)`
  width: 20%;
`;
export const NowChoice = styled.span`
  margin: 15px;
  color: ${(props: IPageNumberProps) => (props.isActive ? "red" : "")};
  :hover {
    cursor: pointer;
  }
`;
export const MoveBt = styled.button`
  all: unset;
  :hover {
    cursor: pointer;
  }
`;
export const Movenext = styled(MoveBt)`
  :disabled {
    display: none;
    visibility: hidden;
  }
`;
export const PageNationWrap = styled.div`
  margin: 15px;
`;
export const SearchKeyWord = styled.span`
  color: ${(props: { el: string; keyWord: string }) =>
    props.el === props.keyWord ? "red" : ""};
`;
