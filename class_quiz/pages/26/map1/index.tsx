import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KaKaoMapPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=e2ad47916777c23ba9e4c16d7c86341d";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(37.489826, 126.888263), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 // 지도 담아서 마커표시등을 하는부분
        console.log(map);
        const imageSrc = "/free-icon-location.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          37.489826,
          126.888263
        ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);
  return (
    <>
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e2ad47916777c23ba9e4c16d7c86341d"
      ></script> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
