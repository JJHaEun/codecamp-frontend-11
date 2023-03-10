import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import type { ChangeEvent } from "react";
import { useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { checkValidationFile } from "../../libraries/validationFile";
import UploadImagesBoardUI from "./Upload.presenter";
import { UPLOAD_FILE } from "./Upload.queries";
import type { UploadImagesBoardProps } from "./Upload.types";

export default function UploadImagesItem(
  props: UploadImagesBoardProps
): JSX.Element {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  // const [files,setFiles] = useState<File[]>([])

  const choiceRef = useRef<HTMLInputElement>(null);

  const onClickImageChoice = async (): Promise<void> => {
    choiceRef.current?.click();
  };
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      if (typeof result.data?.uploadFile.url !== "string") {
        return;
      }

      props.onChangeImageUrls(result.data?.uploadFile?.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <UploadImagesBoardUI
        onChangeFile={onChangeFile}
        imageUrl={props.imageUrl}
        onClickImageChoice={onClickImageChoice}
        choiceRef={choiceRef}
      />
    </>
  );
}
