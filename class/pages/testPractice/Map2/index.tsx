// import { useEffect } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// declare const window: typeof globalThis & {
//   google: any;
//   initMap: () => void;
// };

// function initMap(): void {
//   const geocoder = new google.maps.Geocoder();
//   const infowindow = new google.maps.InfoWindow();

//   // 클릭한 위치의 좌표값을 가져오는 함수
//   function getClickedLatLng(
//     map: google.maps.Map,
//     infowindow: google.maps.InfoWindow
//   ) {
//     google.maps.event.addListener(map, "click", function (event) {
//       const lat = event.latLng.lat();
//       const lng = event.latLng.lng();
//       const latlng = {
//         lat: lat,
//         lng: lng,
//       };

//       // 지오코딩하여 주소를 가져오는 함수 호출
//       geocodeLatLng(geocoder, map, infowindow, latlng);
//     });
//   }

//   if (navigator.geolocation) {
//     // 사용자의 현재 위치를 가져옴
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;

//         const map = new google.maps.Map(
//           document.getElementById("map") as HTMLElement,
//           {
//             zoom: 11,
//             center: { lat: latitude, lng: longitude },
//           }
//         );

//         // 클릭 이벤트 추가
//         getClickedLatLng(map, infowindow);
//       },
//       () => {
//         // 위치 정보를 가져오는데 실패한 경우
//         console.log("Geolocation failed");
//       }
//     );
//   } else {
//     // 브라우저에서 Geolocation API를 지원하지 않는 경우
//     console.log("Geolocation not supported");
//   }
// }

// // geocodeLatLng 함수 수정
// function geocodeLatLng(
//   geocoder: google.maps.Geocoder,
//   map: google.maps.Map,
//   infowindow: google.maps.InfoWindow,
//   latlng: google.maps.LatLngLiteral
// ) {
//   geocoder
//     .geocode({ location: latlng })
//     .then((response) => {
//       if (response.results[0]) {
//         map.setZoom(11);

//         const marker = new google.maps.Marker({
//           position: latlng,
//           map: map,
//         });

//         infowindow.setContent(response.results[0].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         window.alert("No results found");
//       }
//     })
//     .catch((e) => window.alert("Geocoder failed due to: " + e));
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }

// export default function TestMap2(): JSX.Element {
//   useEffect(() => {
//     window.initMap = initMap;
//     const script = document.createElement("script");
//     script.async = true;
//     script.defer = true;
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-xDF_EWyRLto1rH1B2edGOHkchBcRnaI&resion=KO&language=ko&callback=initMap`;
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return <div id="map" style={{ width: 500, height: 500 }} />;
// }

// /////////////////////////////////////

// import { useEffect, useState } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// declare const window: typeof globalThis & {
//   google: any;
//   initMap: () => void;
// };

// function initMap(): void {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latlng = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };

//         const map = new google.maps.Map(
//           document.getElementById("map") as HTMLElement,
//           {
//             zoom: 15,
//             center: latlng,
//           }
//         );

//         const geocoder = new google.maps.Geocoder();
//         const infowindow = new google.maps.InfoWindow();

//         // 클릭한 위치의 좌표값을 가져오는 함수
//         function getClickedLatLng(
//           map: google.maps.Map,
//           infowindow: google.maps.InfoWindow
//         ) {
//           google.maps.event.addListener(map, "click", function (event) {
//             const lat = event.latLng.lat();
//             const lng = event.latLng.lng();
//             const latlng = {
//               lat: lat,
//               lng: lng,
//             };

//             // 지오코딩하여 주소를 가져오는 함수 호출
//             geocodeLatLng(geocoder, map, infowindow, latlng);
//           });
//         }

//         // 클릭 이벤트 추가
//         getClickedLatLng(map, infowindow);
//       },
//       (error) => {
//         console.error("Error Code = " + error.code + " - " + error.message);
//       }
//     );
//   } else {
//     console.error("Geolocation is not supported by this browser.");
//   }
// }

// // geocodeLatLng 함수 수정
// function geocodeLatLng(
//   geocoder: google.maps.Geocoder,
//   map: google.maps.Map,
//   infowindow: google.maps.InfoWindow,
//   latlng: google.maps.LatLngLiteral
// ) {
//   geocoder
//     .geocode({ location: latlng })
//     .then((response) => {
//       if (response.results[0]) {
//         map.setZoom(16);

//         const marker = new google.maps.Marker({
//           position: latlng,
//           map: map,
//         });

//         infowindow.setContent(response.results[0].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         window.alert("No results found");
//       }
//     })
//     .catch((e) => window.alert("Geocoder failed due to: " + e));
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }

// export default function TestMap2(): JSX.Element {
//   useEffect(() => {
//     window.initMap = initMap;
//     const script = document.createElement("script");
//     script.async = true;
//     script.defer = true;
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-xDF_EWyRLto1rH1B2edGOHkchBcRnaI&resion=KO&language=ko&callback=initMap`;
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return <div id="map" style={{ width: 500, height: 500 }} />;
// // }
// import { useEffect } from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// declare const window: typeof globalThis & {
//   google: any;
//   initMap: (latlng: google.maps.LatLngLiteral) => void;
// };

// function initMap(latlng: google.maps.LatLngLiteral): void {
//   const map = new window.google.maps.Map(
//     document.getElementById("map") as HTMLElement,
//     {
//       zoom: 8,
//       center: latlng, // 지도의 중심을 현재 위치로 설정합니다.
//     }
//   );
//   const geocoder = new google.maps.Geocoder();
//   const infowindow = new google.maps.InfoWindow();
//   // / 클릭한 위치의 좌표값을 가져오는 함수
//   function getClickedLatLng(
//     map: google.maps.Map,
//     infowindow: google.maps.InfoWindow
//   ) {
//     google.maps.event.addListener(map, "click", function (event) {
//       const lat = event.latLng.lat();
//       const lng = event.latLng.lng();
//       const latlng = {
//         lat: lat,
//         lng: lng,
//       };

//       // 지오코딩하여 주소를 가져오는 함수 호출
//       geocodeLatLng(geocoder, map, infowindow, latlng);
//     });
//   }

//   // 클릭 이벤트 추가
//   getClickedLatLng(map, infowindow);
// }

// // geocodeLatLng 함수 수정
// function geocodeLatLng(
//   geocoder: google.maps.Geocoder,
//   map: google.maps.Map,
//   infowindow: google.maps.InfoWindow,
//   latlng: google.maps.LatLngLiteral
// ) {
//   geocoder
//     .geocode({ location: latlng })
//     .then((response) => {
//       if (response.results[0]) {
//         map.setZoom(11);

//         const marker = new google.maps.Marker({
//           position: latlng,
//           map: map,
//         });

//         infowindow.setContent(response.results[0].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         window.alert("No results found");
//       }
//     })
//     .catch((e) => window.alert("Geocoder failed due to: " + e));
// }

import { useEffect } from "react";
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
    google.maps.event.addListener(map, "click", function (event) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      const latlng = {
        lat: lat,
        lng: lng,
      };

      // 지오코딩하여 주소를 가져오는 함수 호출
      geocodeLatLng(geocoder, map, infowindow, latlng);
    });
  }

  // 클릭 이벤트 추가
  getClickedLatLng(map, infowindow);
}

// geocodeLatLng 함수 수정
function geocodeLatLng(
  geocoder: google.maps.Geocoder,
  map: google.maps.Map,
  infowindow: google.maps.InfoWindow,
  latlng: google.maps.LatLngLiteral
) {
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
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
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

  return <div id="map" style={{ width: 500, height: 500 }} />;
}
