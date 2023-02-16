// recoilState의 초기값만을 저장하는 파일.
import { atom } from "recoil";
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
