import { ChangeEvent } from "react";

export interface IPropsBoardCommentsUI {
  onClickCreateBoardComment: () => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  nChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (rating: number) => void;
  writer: string;
  contents: string;
  password: string;
  rating: number;
}
