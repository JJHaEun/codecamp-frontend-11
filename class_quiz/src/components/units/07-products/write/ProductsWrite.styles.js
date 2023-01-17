import styled from "@emotion/styled";

export const CreateBt = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
  :hover {
    cursor: ${(props) => (props.isActive ? "pointer" : "")};
  }
`;
