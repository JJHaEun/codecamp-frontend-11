import styled from "@emotion/styled";

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
export const InfiniteWrap = styled.div`
  height: 500px;
  overflow: auto;
`;
