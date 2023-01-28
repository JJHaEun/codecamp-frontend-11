import type { ChangeEvent } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import type { IBoardWrite, ImyUpdate } from "./BoardWrite.types";
import { message, Modal } from "antd";
import type { Address } from "react-daum-postcode";

export default function BoardWrite(props: IBoardWrite): JSX.Element {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [messageApi, contextHolder] = message.useMessage();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [writerErr, setWriterErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentsErr, setContentsErr] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterErr("");
    } else {
      setWriterErr("작성자를 입력해주세요.");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordErr("");
    } else {
      setPasswordErr("비밀번호를 입력해주세요.");
    }
    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleErr("");
    } else {
      setTitleErr("제목을 입력해주세요.");
    }
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsErr("");
    } else {
      setContentsErr("내용을 입력해주세요.");
    }
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(event.target.value);
  };
  const ToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  const onChangeAddress = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    ToggleModal();
  };
  const onChangeAddresssDetail = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setAddressDetail(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    if (writer === "") {
      setWriterErr("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordErr("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleErr("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsErr("내용을 입력해주세요.");
    }
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        if (result.data?.createBoard._id === undefined) {
          Modal.info({ content: "요청에 문제가 있습니다." });
          return;
        }
        Modal.success({
          content: "게시물이 등록되었습니다",
          afterClose() {
            void router.push(`/boards/${String(result.data.createBoard._id)}`);
          },
        });
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const onClickEdit = async (): Promise<void> => {
    if (password === "") {
      Modal.info({ content: "비밀번호를 입력해주세요" });
      return;
    }
    if (
      title !== "" &&
      contents === "" &&
      youtubeUrl === "" &&
      zipcode === "" &&
      address === "" &&
      addressDetail === ""
    ) {
      await messageApi.open({
        type: "info",
        content: "수정사항이 없습니다",
      });
      return;
      // if (confirm("수정하시겠습니까?")) {
      //   alert("수정사항이 없습니다");
      //   return;
      // } else if (!password) {
      //   alert("비밀번호를 입력해주세요");
      // } else {
      //   alert("수정되었습니다");
      //   return router.push(`/boards`);
      // }
    }
    const updateBoardInput: ImyUpdate = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    try {
      const result = await updateBoard({
        variables: {
          password,
          boardId: router.query.boardId,
          updateBoardInput,
        },
      });
      if (typeof result.data.updateBoard._id !== "string") {
        Modal.info({ content: "다시시도해주세요" });
        return;
      }
      void router.push(`/boards/${String(result.data.updateBoard._id)}`);
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
      isOpen={isOpen}
      onChangeAddress={onChangeAddress}
      onChangeAddresssDetail={onChangeAddresssDetail}
      ToggleModal={ToggleModal}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      contextHolder={contextHolder}
    />
  );
}
