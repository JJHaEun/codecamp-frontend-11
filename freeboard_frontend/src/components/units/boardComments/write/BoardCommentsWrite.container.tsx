import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentsUI from "./BoardCommentsWrite.presenter";
import { CREATE_BOARD_COMMENT } from "./BoardCommentsWrite.queries";

export default function BoardComments() {
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeCommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    // 작성자는 로그인한 유저의 이름을 불러와 defaultValue와 redonly 적용 등..
  };

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  // const onChangeRating = ()=>{

  // }

  const onClickCreateBoardComment = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (writer && password && contents) {
      try {
        await createBoardComment({
          variables: {
            boardId: String(router.query.boardId),
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
          },
        });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  // const onClickEditComment = ()=>{

  // }
  return (
    <>
      <BoardCommentsUI
        onClickCreateBoardComment={onClickCreateBoardComment}
        onChangeCommentWriter={onChangeCommentWriter}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
        writer={writer}
        contents={contents}
        password={password}
        rating={rating}
      />
    </>
  );
}
