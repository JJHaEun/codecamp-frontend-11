import { useEffect } from "react";

declare const window: typeof globalThis & {
  // window라는것을 선언하고 globalThis타입이며, 거기에 kakao도 있다.
  kakao: any;
};

export default function KakaoMapPage(): JSX.Element {
  useEffect(() => {
    const container = document.getElementById("map"); // map을가져와서 변수에 담음즉, map이 만들어지고 실행됨 =>Dom이 마운트 된후

    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.489826, 126.888263), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 // 지도 담아서 마커표시등을 하는부분
    console.log(map);
  }, []);
  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9d763b55bd71c2756b73b0ebce6cb31a"
      ></script>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
