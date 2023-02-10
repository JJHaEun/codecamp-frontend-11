import { isEditState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

export default function BoardWriteUI(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      {/* <div>{props.isEdit === true ? "수정하기" : "등록하기"}</div> */}
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
    </>
  );
}
