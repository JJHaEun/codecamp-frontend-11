import { atom } from "recoil";

export const isEditState = atom({
  key: "isEdit",
  default: false,
});
export const isSignIn = atom({
  key: "signIn",
  default: false,
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
