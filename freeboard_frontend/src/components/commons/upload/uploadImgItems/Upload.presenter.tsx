import type { IUploadImagesBoardUIProps } from "./Upload.types";
import * as S from "./Upload.styles";
export default function UploadImagesBoardUI(
  props: IUploadImagesBoardUIProps
): JSX.Element {
  return (
    <>
      {props.imageUrl === "" ? (
        <S.UploadBoxContent>
          <div>+</div>
          <div>Upload</div>
        </S.UploadBoxContent>
      ) : (
        <S.UploadImages
          src={`https://storage.googleapis.com/${props.imageUrl}`}
          alt=""
        />
      )}
      <input
        type="file"
        onChange={props.onChangeFile}
        accept="image/*"
        // ref={props.choiceRef}
        // style={{ display: "none" }}
      />
    </>
  );
}
