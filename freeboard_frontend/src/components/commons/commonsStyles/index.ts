import styled from "@emotion/styled";

export const CreateBoardBt = styled.button`
  margin-top: 20px;

  width: 100px;
  height: 30px;
  border: 2px solid salmon;

  background-color: #ffffff;
  border-radius: 6px;
  :hover {
    cursor: pointer;
    color: indianred;
  }
  :active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;
