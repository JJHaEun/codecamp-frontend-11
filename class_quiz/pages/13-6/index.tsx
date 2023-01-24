import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";

export default function ModalAlertPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const OkButton = styled(Modal)`
    .ant-btn-primary {
      background-color: coral;
    }
  `;
  return (
    <>
      <button onClick={showModal}>모달열기</button>
      <OkButton
        title="게시글 등록"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>게시글이 등록되었습니다</p>
      </OkButton>
    </>
  );
}
