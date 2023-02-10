import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import WriteComponent from "../../../../src/components/units/22/write";

export default function EditPage(): JSX.Element {
  const setIsEdit = useRecoilState(isEditState)[1];

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return (
    <>
      {/* <WriteComponent isEdit={true} /> */}
      <WriteComponent />
    </>
  );
}
