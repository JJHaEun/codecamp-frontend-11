import { atom } from "recoil";

export const isEditState = atom({
  key: "isEdit",
  default: false,
});
export const isAccessToken = atom({
  key: "accessToken",
  default: "",
});
