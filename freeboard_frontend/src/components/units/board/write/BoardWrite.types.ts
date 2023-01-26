import {
  ChangeEvent,
  JSXElementConstructor,
  MouseEvent,
  ReactElement,
} from "react";
import { Address } from "react-daum-postcode";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWrite {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
export interface ImyUpdate {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
export interface IBoardWriteUI {
  writerErr: string;
  passwordErr: string;
  titleErr: string;
  contentsErr: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => void;
  onClickSubmit: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen: boolean;
  onChangeAddress: (data: Address) => void;
  onChangeAddresssDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  ToggleModal: () => void;
  zipcode: string;
  address: string;
  addressDetail: string;
  contextHolder: ReactElement<any, string | JSXElementConstructor<any>>;
}
export interface IProps {
  isActive: boolean;
}
