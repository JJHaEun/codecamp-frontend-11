import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAndAddressPage(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const onClickToggle = (): void => {
    setOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    setAddress(data.address);
    onClickToggle();
  };

  return (
    <>
      {open && (
        <Modal open={true} onOk={onClickToggle} onCancel={onClickToggle}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
      <button onClick={onClickToggle}>모달열기</button>
      <span>{address}</span>
    </>
  );
}
