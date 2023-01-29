import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const BoxStyled = styled(Box)`
  position: absolute as absolute;
  /* top: 50%;
  left: 50%; */
  transform: translate(85%, 80%);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 400px;
  background-color: #ff7f50c3;
  /* border: 2px solid #000; */
  /* box-shadow: 5px 4px 3px coral; */
  /* p:nth-of-type(1) {
    text-align: center;
  } */
`;
const ModalWrap = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  right: 400px;
  bottom: 500px;
  text-align: center;
`;
export default function MaterialUI(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleClick}>모달열기</button>
      <ModalWrap
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyled>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal
          </Typography>
          <div>이 편지는 oo부터 시작되어 ..</div>
        </BoxStyled>
      </ModalWrap>
    </>
  );
}
