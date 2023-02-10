// recoilState의 초기값만을 저장하는 파일.
import { atom } from "recoil";
export const isEditState = atom({
  key: "isEditState", // 변수명
  default: true, // 초기값
});
