import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/stores";

// interface IWriteComponentProps {
//   isEdit?: boolean;
// }

export default function WriteComponent(): JSX.Element {
  //   props: IWriteComponentProps
  const isEdit = useRecoilState(isEditState)[0];
  return (
    <>
      {/* <h1>{!(props.isEdit === true) ? "등록하기" : "수정하기"}</h1> */}
      <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
    </>
  );
}
