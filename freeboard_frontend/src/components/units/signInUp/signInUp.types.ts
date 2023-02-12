import type { ChangeEvent, RefObject } from "react";

export interface ISignInUpProps {
  signIn?: boolean;
}
export interface ISignInUpUIProps {
  signIn?: boolean;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => Promise<void>;
  onChangeSignIn: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignIn: () => Promise<void>;
  inputRef: RefObject<HTMLInputElement>;
  onClickMoveSignIn: () => void;
  onClickMoveSignUp: () => void;
}
