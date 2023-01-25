import { ChangeEvent, MouseEvent } from "react";
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
}
export interface IProps {
  isActive: boolean;
}
