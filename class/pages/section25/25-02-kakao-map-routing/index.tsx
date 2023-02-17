import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push(`/section25/25-02-kakao-map-routing-moved`);
  };
  return (
    <>
      <button onClick={onClickMove}>페이지이동!!</button>

      {/* 매 페이지를 새로 다운로드 받으므로 SPA(싱글페이지 어플리케이션)를 활용못함 */}
      <a href="/section25/25-02-kakao-map-routing-moved">페이지 이동하기</a>

      {/* next에서 제공하는 a태그이므로 SPA활용가능하다.그리고 a라는 것을 써주었기에 검색에 노출이 잘되게된다 */}
      <Link href="/section25/25-02-kakao-map-routing-moved">
        <a> 페이지 이동하기</a>
      </Link>

      {/* 의미있는 시멘틱 태그의 장점 */}
      <h1>요리</h1>
      <section>요리</section>
      <div>요리</div>
    </>
  );
}
