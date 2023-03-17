import { useEffect, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

declare const window: typeof globalThis & {
  google: any;
  initMap: (latlng: google.maps.LatLngLiteral) => void;
};

// declare global {
//   interface Window {
//     initMap: (latlng: google.maps.LatLngLiteral) => void;
//   }
// }

export default function TestMap3(): JSX.Element {
  const [geo, setGeo] = useState<{ lat: number; lng: number }>();
  class CenterControl {
    private map_: google.maps.Map;
    private center_: google.maps.LatLng;
    constructor(
      controlDiv: HTMLElement,
      map: google.maps.Map,
      center: google.maps.LatLngLiteral
    ) {
      this.map_ = map;
      // Set the center property upon construction
      this.center_ = new google.maps.LatLng(center);
      controlDiv.style.clear = "both";

      // Set CSS for the control border
      const goCenterUI = document.createElement("button");

      goCenterUI.id = "goCenterUI";
      goCenterUI.title = "Click to recenter the map";
      controlDiv.appendChild(goCenterUI);

      // Set CSS for the control interior
      const goCenterText = document.createElement("div");

      goCenterText.id = "goCenterText";
      goCenterText.innerHTML = "Center Map";
      goCenterUI.appendChild(goCenterText);

      // Set CSS for the setCenter control border
      const setCenterUI = document.createElement("button");

      setCenterUI.id = "setCenterUI";
      setCenterUI.title = "Click to change the center of the map";
      controlDiv.appendChild(setCenterUI);

      // Set CSS for the control interior
      const setCenterText = document.createElement("div");

      setCenterText.id = "setCenterText";
      setCenterText.innerHTML = "Set Center";
      setCenterUI.appendChild(setCenterText);

      // Set up the click event listener for 'Center Map': Set the center of
      // the map
      // to the current center of the control.
      goCenterUI.addEventListener("click", () => {
        const currentCenter = this.center_;

        this.map_.setCenter(currentCenter);
      });

      // Set up the click event listener for 'Set Center': Set the center of
      // the control to the current center of the map.
      setCenterUI.addEventListener("click", () => {
        const newCenter = this.map_.getCenter()!;

        if (newCenter) {
          this.center_ = newCenter;
        }
      });
    }
  }
  function initMap(latlng: google.maps.LatLngLiteral): void {
    const map = new window.google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 18,
        center: latlng, // 지도의 중심을 현재 위치로 설정합니다.
      }
    );
    const marker = new google.maps.Marker({
      // 현 위치에 마커표시
      position: latlng,
      map: map,
      draggable: true,
    });

    let infowindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      ariaLabel: "Shop",
    });
    // / 클릭한 위치의 좌표값을 가져오는 함수
    const centerControlDiv = document.createElement("div");
    const control = new CenterControl(centerControlDiv, map, latlng);

    // @ts-ignore
    centerControlDiv.index = 1;
    centerControlDiv.style.paddingTop = "10px";
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    infowindow.open(map);
    marker.addListener("click", (mapsMouseEvent: any) => {
      // Close the current InfoWindow.
      infowindow.close();
      infowindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infowindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infowindow.open(map);
    });
    map.addListener("click", (mapsMouseEvent: any) => {
      // Close the current InfoWindow.
      infowindow.close();
      infowindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infowindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infowindow.open(map);
    });

    // 클릭한 위치의 좌표값을 가져오는 함수
    // function getClickedLatLng(
    //   map: google.maps.Map,
    //   infowindow: google.maps.InfoWindow
    // ) {
    //   google.maps.event.addListener(map, "click", function (event: any) {
    //     const lat = event.latLng.lat();
    //     const lng = event.latLng.lng();
    //     const latlng2 = {
    //       lat: lat,
    //       lng: lng,
    //     };

    //     // 지오코딩하여 주소를 가져오는 함수 호출
    //     geocodeLatLng(geocoder, map, infowindow, latlng2);
    //   });
    //   getClickedLatLng(map, infowindow);
    // }
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-xDF_EWyRLto1rH1B2edGOHkchBcRnaI&resion=KO&language=ko&callback=initMap&v=weekly`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: 500, height: 500 }} />
    </>
  );
}
