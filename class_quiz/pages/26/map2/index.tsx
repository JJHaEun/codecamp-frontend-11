import { useRouter } from "next/router";

export default function KakaoMap2(): JSX.Element {
  const router = useRouter();

  const onClickMovePage = (): void => {
    void router.push(`/26/map1`);
  };

  return (
    <>
      <button onClick={onClickMovePage}>이동하기</button>
    </>
  );
}
