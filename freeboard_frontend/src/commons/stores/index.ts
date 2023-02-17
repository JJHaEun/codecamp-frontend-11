import { atom } from "recoil";

export const isEditState = atom({
  key: "isEdit",
  default: false,
});
export const isOpenState = atom({
  key: "isOpen",
  default: false,
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
