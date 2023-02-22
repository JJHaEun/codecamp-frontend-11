import { Modal } from "antd";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { checkValidationFile } from "../../../../../commons/libraries/validationFile";
import { useMutationUpload } from "../mutations/useMutationUpLoadImg";

export const useOnChoiceImages = () => {
  const [uploadFile] = useMutationUpload();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const onChangeImageUrls = (imageUrl: string, index: number): void => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = imageUrl;
    setImageUrls(newImageUrls);
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    console.log(file);
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result.data?.uploadFile.url);
      onChangeImageUrls(
        result.data?.uploadFile?.url ?? "",
        Number(event.target.id)
      );
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onChangeFile,
    imageUrls,
    onChangeImageUrls,
    setImageUrls,
  };
};
