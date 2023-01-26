import { CaretRightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react"; // 타입만 import 하는것.
// 만약 타입과 기능(useState)등을 같이 여기 적을경우는 에러. 따로 적어주어야함. 아니면 eslint의 기능을 끔.

const MyIcon = styled(CaretRightOutlined)`
  color: blue;
  font-size: 50px;
`;
export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id);
  };
  return (
    <span id="삭제할게시글ID" onClick={onClickDelete}>
      <MyIcon />
    </span>
  );
}
