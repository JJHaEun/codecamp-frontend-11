import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWrite, ImyUpdate } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWrite) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [writerErr, setWriterErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentsErr, setContentsErr] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterErr("");
    } else {
      setWriterErr("작성자를 입력해주세요.");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordErr("");
    } else {
      setPasswordErr("비밀번호를 입력해주세요.");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleErr("");
    } else {
      setTitleErr("제목을 입력해주세요.");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsErr("");
    } else {
      setContentsErr("내용을 입력해주세요.");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };
  const onClickSubmit = async () => {
    if (!writer) {
      setWriterErr("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordErr("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleErr("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsErr("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
            },
          },
        });

        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    if (!title && !contents) {
      if (confirm("수정하시겠습니까?")) {
        alert("수정사항이 없습니다");
        return;
      } else if (!password) {
        alert("비밀번호를 입력해주세요");
      } else {
        alert("수정되었습니다");
        return router.push(`/boards`);
      }
    }
    const updateBoardInput: ImyUpdate = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    try {
      const result = await updateBoard({
        variables: {
          password,
          boardId: router.query.boardId,
          updateBoardInput,
        },
      });

      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <BoardWriteUI
      writerErr={writerErr}
      passwordErr={passwordErr}
      titleErr={titleErr}
      contentsErr={contentsErr}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeYoutube={onChangeYoutube}
      onClickEdit={onClickEdit}
      onClickSubmit={onClickSubmit}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
