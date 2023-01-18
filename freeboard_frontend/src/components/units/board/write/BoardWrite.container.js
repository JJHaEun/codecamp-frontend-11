import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props) {
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

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    // if (event.target.value !== "") {

    // }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
      setWriterErr("");
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    // if (event.target.value !== "") {

    // }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
      setPasswordErr("");
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    // if (event.target.value !== "") {

    // }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
      setTitleErr("");
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = (event) => {
    setContents(event.target.value);
    // if (event.target.value !== "") {

    // }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
      setContentsErr("");
    } else {
      setIsActive(false);
    }
  };
  const onChangeYoutube = (event) => {
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
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const onClickEdit = async () => {
    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
            youtubeUrl,
          },
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
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
    />
  );
}
