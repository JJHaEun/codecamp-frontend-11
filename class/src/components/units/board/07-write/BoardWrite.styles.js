import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  /* background-color: ${(props) =>
    props.isActive === true ? "yellow" : ""}; */
  background-color: ${(props) =>
    props.isActive ? "yellow" : ""}; // 탬플릿 리터럴!!
  :hover {
    cursor: ${(props) => (props.isActive ? "pointer" : "")};
  }

  /* props.mycolor가 true면 노란색, 아니면 기본색(빈 문자열 사용하면 기본색 나옴) */
`;
