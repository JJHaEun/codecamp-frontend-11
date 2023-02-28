import styled from "@emotion/styled";

interface IPropsKeyWord {
  el: string;
  keyWord: string;
}

export const SearchKeyWord = styled.span`
  color: ${(props: IPropsKeyWord) =>
    props.el === props.keyWord ? "rgb(95, 158, 160)" : ""};
  font-weight: ${(props: IPropsKeyWord) =>
    props.el === props.keyWord ? "600" : ""};
`;
