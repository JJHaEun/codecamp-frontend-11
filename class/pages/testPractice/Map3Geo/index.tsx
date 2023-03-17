import { useEffect, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

declare const window: typeof globalThis & {
  google: any;
  initMap: (latlng: google.maps.LatLngLiteral) => void;
};

function initMap(latlng: google.maps.LatLngLiteral): void {
  const map = new window.google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 15,
      center: latlng, // 지도의 중심을 현재 위치로 설정합니다.
    }
  );
  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();
  // / 클릭한 위치의 좌표값을 가져오는 함수
  function getClickedLatLng(
    map: google.maps.Map,
    infowindow: google.maps.InfoWindow
  ) {
    const input = document ? document.getElementById("latlng") : null;
    // if (input !== null) {
    google.maps.event.addListener(map, "click", function (event) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      const latlng2 = {
        lat: lat,
        lng: lng,
      };

      // 지오코딩하여 주소를 가져오는 함수 호출
      geocodeLatLng(
        geocoder,
        map,
        infowindow,
        latlng2,
        input as HTMLInputElement
      );
    });
  }
  // }

  // 클릭 이벤트 추가
  getClickedLatLng(map, infowindow);
}

// geocodeLatLng 함수 수정
function geocodeLatLng(
  geocoder: google.maps.Geocoder,
  map: google.maps.Map,
  infowindow: google.maps.InfoWindow,
  latlng2: google.maps.LatLngLiteral,
  input: HTMLInputElement
) {
  const inputValue = input.value;
  const latlngStr = inputValue.split(",", 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };
  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        map.setZoom(11);

        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });

        infowindow.setContent(response.results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}
declare global {
  interface Window {
    initMap: (latlng: google.maps.LatLngLiteral) => void;
  }
}
export default function TestMap2(): JSX.Element {
  const [geo, setGeo] = useState<{ lat: number; lng: number }>();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setGeo(latlng);

        initMap(latlng); // 인자를 전달하도록 수정합니다.
      });
    } else {
      alert("이 브라우저에서는 위치 정보를 가져올 수 없습니다.");
    }
    window.initMap = initMap; // 중요
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-xDF_EWyRLto1rH1B2edGOHkchBcRnaI&resion=KO&language=ko&callback=initMap`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {" "}
      <div id="map" style={{ width: 500, height: 500 }} />
      <input type="text" id="latlng" value={`${geo?.lat}, ${geo?.lng}`} />
    </>
  );
}
