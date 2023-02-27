import { memo } from "react";

function MemoizationChildrenPage(): JSX.Element {
  console.log("자식이 랜더링 됩니다");

  return <></>;
}
export default memo(MemoizationChildrenPage);
