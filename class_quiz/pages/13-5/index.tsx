import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalAddressUsePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    console.log(data);
    console.log(data.address);

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const onClickOpen = () => {
    setIsOpen(true);
    setIsModalOpen((prev) => !prev);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={onClickOpen}>모달열기</button>
      {isOpen && (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleOk}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
      {/* <span>{Address}</span> */}
    </>
  );
}
