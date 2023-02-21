import { Modal } from "antd";
import type { ChangeEvent } from "react";
import { useRef, useEffect, useState } from "react";
import { checkValidationFile } from "../../../../../commons/libraries/validationFile";
import { useMutationUpload } from "../mutations/useMutationUpLoadImg";
import { useQueryFetchUsedItem } from "../quries/useQueryFetchUsedItem";

export const useOnChoiceImages = () => {
  const choiceRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutationUpload();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const { data } = useQueryFetchUsedItem();
  const onClickImageChoice = async (): Promise<void> => {
    choiceRef.current?.click();
  };
  const onChangeImageUrls = (imageUrl: string, index: number): void => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = imageUrl;
    setImageUrls(newImageUrls);
  };
  useEffect(() => {
    const images = data?.fetchUseditem.images;
    if (images !== undefined && images !== null) {
      setImageUrls([...images]);
    }
  }, [data]);
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
    onClickImageChoice,
    onChangeFile,
    choiceRef,
    imageUrls,
  };
};
