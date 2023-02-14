import styled from "@emotion/styled";
import { CreateBoardBt } from "../../commons/commonsStyles";

export const LogWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogPageLogo = styled.h1`
  font-size: 60px;
  font-family: "nanum_somi", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  padding-bottom: 80px;
`;
export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px 0;
`;
export const Title = styled.h2`
  font-size: 48px;
  padding-bottom: 25px;
`;
export const LogInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 15px;
  padding: 15px;
  border: 2px solid salmon;
  :focus {
    outline: salmon solid 2px;
  }
`;
export const Sub = styled.span`
  font-size: 10px;
  color: silver;
  border-bottom: 1px solid silver;
  padding-bottom: 2px;
  :hover {
    cursor: pointer;
    color: #008b8b;
    border-color: #008b8b;
  }
`;
export const LogButton = styled(CreateBoardBt)`
  width: 300px;
  height: 50px;
  border-radius: 15px;
  background-color: #dc143c;
  color: white;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.1em;
`;
