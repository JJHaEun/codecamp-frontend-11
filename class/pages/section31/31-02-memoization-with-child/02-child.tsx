import { memo } from "react";

function MemoizationWithChildPage(): JSX.Element {
  console.log("자식이 랜더링 되었습니다");
  // 부모가 리랜더링되면서 자식도 같이 리랜더링됨(부모 state가 변경되며...)
  // 리엑트의 메모라는 기능으로 이 컴포넌트 전부를 감싸기
  return (
    <>
      <div>=============================</div>
      <h1>저는 자식 컴포넌트 입니다!!!</h1>
      <div>=============================</div>
    </>
  );
}
export default memo(MemoizationWithChildPage);
// 해당 컴포넌트를 메모해 내보냄으로써 기억. // 이렇게하면 부모만 리랜더링됨.// 메모를 푼다면 자식도 렌더링 같이됨
// 단. 무언가를 넘겨받는다면(넘어가면..) 사용하지 않더라도 메모를 쓴다고해도 리랜더됨.
