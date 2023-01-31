import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";

import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentsList.queries";
import BoardCommentsUI from "./BoardCommentsWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentsWrite.queries";
import type {
  IMyupdateComment,
  IPropsBoardComments,
} from "./BoardCommentsWrite.types";

export default function BoardComments(props: IPropsBoardComments): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onChangeCommentWriter = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setWriter(event.target.value);
    // 작성자는 로그인한 유저의 이름을 불러와 defaultValue와 redonly 적용 등..
  };

  const onChangeCommentPassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const onChangeCommentContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContents(event.target.value);
  };
  const onChangeRating = (rating: number): void => {
    setRating(rating);
  };

  const onClickCreateBoardComment = async (): Promise<void> => {
    if (writer !== "" && password !== "" && contents !== "") {
      try {
        const result = await createBoardComment({
          variables: {
            boardId: String(router.query.boardId),
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        setWriter("");
        setRating(0);
        setPassword("");
        setContents("");
        window.scrollTo({
          top: 2500,
          behavior: "smooth",
        });
        console.log(result);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };
  // console.log(contents.length);
  const updateBoardCommentInput: IMyupdateComment = {};
  if (contents !== "") updateBoardCommentInput.contents = contents;
  if (rating !== 0) updateBoardCommentInput.rating = rating;

  const onClickEditComment = async (): Promise<void> => {
    if (password === "") {
      Modal.info({ content: "비밀번호를 입력해주세요" });
      return;
    }
    if (typeof router.query.boardId !== "string") {
      Modal.info({ content: "다시시도해주세요" });
      return;
    }
    if (contents === "" && rating === 0) {
      Modal.info({ content: "수정사항이 없습니다" });
      props.setIsEdit((prev) => !prev);
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          password,
          boardCommentId: props.id,
          updateBoardCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <BoardCommentsUI
        onClickCreateBoardComment={onClickCreateBoardComment}
        onChangeCommentWriter={onChangeCommentWriter}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
        onChangeRating={onChangeRating}
        writer={writer}
        contents={contents}
        password={password}
        rating={rating}
        data={data}
        onClickEditComment={onClickEditComment}
        isEdit={props.isEdit}
        el={props.el}
      />
    </>
  );
}
