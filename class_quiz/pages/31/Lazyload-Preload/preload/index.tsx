import { useRouter } from "next/router";
import { useEffect } from "react";
const imgArray = [];
const Cat = [
  `/cat1.jpeg`,
  `/cat2.jpeg`,
  "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg",
];

export default function PreloadPage(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    Cat.map((_, index) => {
      const img = new Image();
      img.src = Cat[index];
      img.onload = () => {
        imgArray.push(img);
      };
      return img;
    });
  }, []);

  const onClickShow = (): void => {
    void router.push(`/31/Lazyload-Preload/preload/preload-moved`);
  };
  return (
    <>
      <button onClick={onClickShow}>이미지 보여주기</button>
    </>
  );
}
