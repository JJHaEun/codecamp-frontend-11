import type { RefObject } from "react";
import type {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignInUpProps {
  signIn?: boolean;
}
export interface ISignForm {
  email: string;
  password: string;
  name?: string;
}
export interface ISignInUpUIProps {
  signIn?: boolean;
  onClickSignUp: (data: Required<ISignForm>) => void;
  onClickSignIn: (data: ISignForm) => void;
  inputRef: RefObject<HTMLInputElement>;
  onClickMoveSignIn: () => void;
  onClickMoveSignUp: () => void;
  register: UseFormRegister<ISignForm>;
  handleSubmit: UseFormHandleSubmit<ISignForm>;
  formState: FormState<ISignForm>;
}
