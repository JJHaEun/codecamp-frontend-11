import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseAuthPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage(); // 커스텀 훅으로 만들어 따로 빼서 return하여 필요한 부분 뽑아사용
  return (
    <>
      <button onClick={onClickMoveToPage(`/boards`)}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage(`/markets`)}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage(`/mypage`)}>마이페이지로 이동</button>
    </>
  );
}
