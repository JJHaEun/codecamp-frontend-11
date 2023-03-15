declare const window: typeof globalThis & {
  kakao: any;
};

export const SearchPlacesFunc = () => () => {
  const ps = new window.kakao.maps.services.Places();

  function searchPlaces(placesSearchCB: void) {
    const keyword = document.getElementById("keyword")?.value;

    if (!keyword?.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(keyword, placesSearchCB);
  }
  return {
    searchPlaces,
  };
};
