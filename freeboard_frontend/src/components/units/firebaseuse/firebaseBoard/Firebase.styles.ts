import styled from "@emotion/styled";
import { CreateBoardBt } from "../../../commons/commonsStyles";

export const HowDoYouDoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
export const HowDoYouDo = styled.h1`
  font-family: "KOTRA_BOLD-Bold";
  font-size: 25px;
`;
export const WriterTitle = styled.div`
  display: flex;
  gap: 5px;
`;
export const BorderLine = styled.input`
  font-family: "UhBeeRice";
  border: none;
  border-bottom: 1px solid salmon;
  /* border: 1px solid salmon; */
  outline: none;
  :focus {
    outline: 1px solid salmon;
  }
  width: 180px;
  height: 40px;
  padding: 10px;
  /* border-radius: 8px; */
`;
export const Contents = styled.textarea`
  font-family: "UhBeeRice";
  border: none;
  outline: none;
  width: calc(5px + (180px * 2));
  height: 100px;
  padding: 8px;
  resize: none;
  border-radius: 10px;
`;
export const ContentWrap = styled.div`
  border: 1px solid salmon;
  display: flex;
  align-items: flex-end;
  /* align-items: center; */
  width: calc(5px + (180px * 2));

  height: 105px;
  border-radius: 10px;
`;
export const ContentsLength = styled.span`
  font-size: 10px;
  color: silver;
  padding-right: 3px;
`;
export const SubButton = styled(CreateBoardBt)`
  width: 50px;
`;
export const MainNButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
