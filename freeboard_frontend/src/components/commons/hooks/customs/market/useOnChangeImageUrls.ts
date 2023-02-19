import { useEffect, useState } from "react";
import { useQueryFetchUsedItem } from "../quries/useQueryFetchUsedItem";

export const useOnChangeImagUrls = () => {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const { data } = useQueryFetchUsedItem();
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
  return { onChangeImageUrls, imageUrls };
};
