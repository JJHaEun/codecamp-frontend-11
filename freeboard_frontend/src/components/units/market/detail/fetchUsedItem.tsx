import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MessageDate } from "../../../../commons/libraries/date";
import { useDeleteUsedItem } from "../../../commons/hooks/customs/market/useOnclickDeleteUsedItem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/customs/quries/useQueryFetchUsedItem";
import MarketQuestionListUI from "../../marketQuestion/list/questionList";
import MarketQuestionUI from "../../marketQuestion/write/question.container";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function MarketDetailUI() {
  const router = useRouter();
  const { onClickDelete } = useDeleteUsedItem();
  const { data } = useQueryFetchUsedItem();
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9d763b55bd71c2756b73b0ebce6cb31a&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      // 스크립트가 로드가 다 되고
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(37.511826, 127.058388), // 지도의 중심좌표.
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });
              marker.setMap(map);

              const iwContent = `<div style="text-align:center;padding:6px;">위치</div>`;

              // 인포윈도우를 생성합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: iwContent,
              });
              //   infowindow = new window.kakao.maps.InfoWindow({
              //     content:
              //       '<div style="width:100px;text-align:center;padding:6px 0;">거래위치</div>',
              //   });
              //   infowindow.open(map, marker);
              window.kakao.maps.event.addListener(
                marker,
                "mouseover",
                function () {
                  // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                  infowindow.open(map, marker);
                }
              );
              window.kakao.maps.event.addListener(
                marker,
                "mouseout",
                function () {
                  // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                  infowindow.close();
                }
              );
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, []);
  return (
    <>
      <div>
        <div>
          <h1>{data?.fetchUseditem.remarks}</h1>
        </div>
        <div>
          <div>
            <div>{data?.fetchUseditem.seller?.name}</div>
            <div>{MessageDate(String(data?.fetchUseditem.createdAt))}</div>
            <div>
              <div>{data?.fetchUseditem.useditemAddress?.address}</div>
              <div>{data?.fetchUseditem.useditemAddress?.addressDetail}</div>
            </div>
          </div>
          {(data?.fetchUseditem.useditemAddress?.address !== "" &&
            data?.fetchUseditem.useditemAddress?.zipcode !== "") ?? (
            <div id="map" style={{ width: 250, height: 200 }}></div>
          )}

          <div>{data?.fetchUseditem.contents}</div>
        </div>
        <div>
          {data?.fetchUseditem.images
            ?.filter((el) => el)
            .map((el) => (
              <img key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </div>
        <div>
          <button>
            <Link href={`/market/new`}>
              <a>상품등록</a>
            </Link>
          </button>
          <button>
            <Link href={`/market/${String(router.query.productBoardId)}/edit`}>
              <a>수정</a>
            </Link>
          </button>
          <button onClick={onClickDelete}>삭제</button>
        </div>
      </div>
      <MarketQuestionUI />
      <MarketQuestionListUI />
    </>
  );
}
