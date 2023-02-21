export const useOnChangeImagUrls = () => {
  // const [imageUrls, setImageUrls] = useState(["", "", ""]);
  // const { data } = useQueryFetchUsedItem();

  // const onChangeImageUrls = (imageUrl: string, index: number): void => {
  //   const newImageUrls = [...imageUrls];
  //   newImageUrls[index] = imageUrl;
  //   setImageUrls(newImageUrls);å
  // };
  // useEffect(() => {
  //   const images = data?.fetchUseditem.images;
  //   if (images !== undefined && images !== null) {
  //     setImageUrls([...images]);
  //   }
  // }, [data]);
  const imgError = (event: any) => {
    event.target.src = "/cartset.png";
  };
  return {
    // onChangeImageUrls, imageUrls,
    imgError,
  };
};
