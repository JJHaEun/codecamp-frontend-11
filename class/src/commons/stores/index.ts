// recoilState의 초기값만을 저장하는 파일.
import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
export const isEditState = atom({
  key: "isEditState", // 변수명
  default: true, // 초기값
});
// 이것을 기준으로 state가 만들어지는것!
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

// 로더블함수 만듬
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable", // 함수명
  get: async () => {
    // 글로벌로나갈 APi요청적는곳
    const newAccessToken = await getAccessToken();
    return newAccessToken; // 이 요청 받은결과를 필요한곳에서 뽑아사용가능
  },
});
