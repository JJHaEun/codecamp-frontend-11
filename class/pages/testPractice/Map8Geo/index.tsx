import { useEffect } from "react";

declare const window: typeof globalThis & {
  google: any;
  // initMap: (latlng: google.maps.LatLngLiteral) => void;
};
export default function GEoMap8888(): JSX.Element {
  useEffect(() => {
    const mapDiv = document.getElementById("map");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLatLng = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        // 지도의 옵션을 설정해줍니다.
        const mapOptions = {
          center: currentLatLng,
          zoom: 18,
        };

        // 지도를 생성합니다.
        const map = new google.maps.Map(mapDiv as HTMLDivElement, mapOptions);

        // 마커를 생성합니다.

        const marker = new google.maps.Marker({
          map: map,
        });
        marker.setPosition(currentLatLng);
        // 마커를 클릭했을 때 정보창을 보여줍니다.
        const infoWindow = new google.maps.InfoWindow({
          content: "<p>클릭한 위치의 정보를 보여줍니다.</p>  ",
        });

        // 지도를 클릭했을 때 마커를 찍고 해당 위치의 정보를 보여줍니다.
        google.maps.event.addListener(map, "click", function (event: any) {
          marker.setPosition(event.latLng);
          infoWindow.setContent(`
        <p>위도: ${event.latLng.lat()}</p>
        <p>경도: ${event.latLng.lng()}</p>
        <p>주소: </p>
      `);

          // 좌표를 주소로 변환해줍니다.
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode(
            { location: event.latLng },
            function (results, status) {
              if (status === "OK") {
                if (results?.[0]) {
                  infoWindow.setContent(`
              <p>위도: ${event.latLng.lat()}</p>
              <p>경도: ${event.latLng.lng()}</p>
              <p>주소: ${results[0].formatted_address}</p>
            `);
                } else {
                  window.alert("검색 결과가 없습니다.");
                }
              } else {
                window.alert(
                  "지오코딩 API가 실패했습니다. 상태 코드: " + status
                );
              }
            }
          );
          infoWindow.open(map, marker);
        });
      });
    }
    // 지도의 기본 위치를 지정해줍니다.
  }, []);

  return (
    <>
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-xDF_EWyRLto1rH1B2edGOHkchBcRnaI&resion=KO&language=ko&v=weekly"
      ></script>
      <div id="map" style={{ width: 800, height: 800 }} />
    </>
  );
}
