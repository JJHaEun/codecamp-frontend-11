import { useEffect } from "react";
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
export default function GlobalStateWithRecoilPage(props: any): JSX.Element {
  //   const [isEdit, setIsEdit] = useState(true);
  const [, setIsEdit] = useRecoilState(isEditState); // 이 변수를 가지고와서 isEdit라는 이름으로 사용하는것.

  useEffect(() => {
    // 이 페이지가 열리면
    // 글로벌 state를 false로 바꿈 => 모든공간에서 다 false
    setIsEdit(false);
  }, []);
  return (
    <>
      {/* <BoardWrite isEdit={true} /> */}
      {/* <BoardWrite isEdit={isEdit} /> */}
      <BoardWrite />
    </>
  );
}
