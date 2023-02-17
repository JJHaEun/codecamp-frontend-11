import { useEffect } from "react";

declare const window: typeof globalThis & {
  // window라는것을 선언하고 globalThis타입이며, 거기에 kakao도 있다.
  kakao: any;
};

export default function KakaoMapPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9d763b55bd71c2756b73b0ebce6cb31a";
    document.head.appendChild(script); // head태그안에 script태그를 넣어준다..

    script.onload = () => {
      // 카카오 라이브러리가 로드될때까지 시간 필요
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const container = document.getElementById("map"); // map을가져와서 변수에 담음즉, map이 만들어지고 실행됨 =>Dom이 마운트 된후

        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.489826, 126.888263), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 // 지도 담아서 마커표시등을 하는부분
        console.log(map);
        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          37.489826,
          126.888263
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);
  return (
    <>
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9d763b55bd71c2756b73b0ebce6cb31a"
      ></script> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
