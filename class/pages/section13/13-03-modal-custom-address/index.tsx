import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };
  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancle = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address): void => {
    // data의 타입이 정해져있음. Address라는 타입 제공됨
    console.log(data);
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달창 열기</button>

      {/*  모달 종료방식 1. 모달 숨기는 방법 */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancle}>
        <DaumPostcodeEmbed onComplete={handleComplete} /> */}
      {/* 비밀번호 입력: <input type="password" /> */}
      {/* </Modal> */}

      {/* 모달 종료방식 2. 모달 삭제하는 방법 */}
      {isOpen && ( // isOpen이 true일때 모달이 열리고, 또다시 모달 열려하면 새것이 열림(open이 항상 true니까)
        <Modal open={true} onOk={handleOk} onCancel={handleCancle}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
          {/* 비밀번호 입력: <input type="password" /> */}
        </Modal>
      )}
    </>
  );
}
