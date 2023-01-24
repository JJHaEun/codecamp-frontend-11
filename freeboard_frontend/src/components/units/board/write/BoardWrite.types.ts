import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWrite {
  isEdit: boolean;
  data?: any;
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
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
  isEdit: boolean;
  data: any;
}
export interface IProps {
  isActive: boolean;
}
