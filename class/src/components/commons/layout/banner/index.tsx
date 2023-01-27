import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 200px;
  background-color: skyblue;
`;

export default function LayoutBanner(): JSX.Element {
  return (
    <>
      <Wrapper>여기는 베너입니다</Wrapper>
    </>
  );
}
