import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 60vw;
`;
export const MainTable = styled.div`
  margin-top: 50px;
`;
export const RowT = styled.div`
  display: flex;
  /* border-bottom: 1px solid; // 색넣고 */
  border-top: 2px solid crimson;
  border-bottom: 2px solid crimson;
  padding: 5px;
`;
export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid crimson;
  padding: 5px;
`;

export const Writer = styled.div`
  width: 20vw;
  margin-right: 60px;
  padding-left: 10px;
  text-align: center;
`;
export const WriterT = styled(Writer)`
  font-weight: bold;
`;
export const Title = styled(Writer)`
  width: 60%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const TitleT = styled(Title)`
  font-weight: bold;
`;
export const Content = styled(Writer)`
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ContentT = styled(Content)`
  font-weight: bold;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
