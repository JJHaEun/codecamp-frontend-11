import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = []; // 전역으로빼서 메모리가 유지되게함(메모리에 캐싱해놓음). 함수 안쪽은 리랜더링되기에
export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      qqq.push(img); // img태그를 qqq라는 배열에 넣기. 해당 배열은 저 위쪽 전역변수이기에 이 컴포넌트가 사라지더라도 이 변수는 유지되어있음. => 캐싱해두기
    };
  }, []);
  // 이 페이지에서 이미지를 미리 다운받아놓음.따라서 페이지 이동시 빨리보임.(메모리에 캐싱해놓는것.)

  const onClickPageMove = (): void => {
    void router.push(`/section31/31-09-image-preload-moved`);
  };
  return (
    <>
      <button onClick={onClickPageMove}>페이지 이동하기!!!</button>
    </>
  );
}
