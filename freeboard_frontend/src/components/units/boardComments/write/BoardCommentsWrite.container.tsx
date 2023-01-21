import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
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

export default function BoardComments(props) {
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
  const onChangeRating = (rating: number) => {
    setRating(rating);
  };

  const onClickCreateBoardComment = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (writer && password && contents) {
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
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEditComment = () => {
    props.setIsEdit(true);
    try {
      updateBoardComment({
        variables: {
          password,
          boardCommentId: props.el_id,
          updateBoardCommentInput: {
            contents,
            rating,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickCancelEdit = () => {
    // 수정시에 취소버튼도 만들어 취소버튼을 누르면 다시 새로고침되게
    //  router.push(`/boards/${result.data.}`)
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
      />
    </>
  );
}
