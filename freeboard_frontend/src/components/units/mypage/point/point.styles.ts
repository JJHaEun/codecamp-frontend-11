import styled from "@emotion/styled";
import { Modal } from "antd";

export const PointPageWrap = styled.div`
  display: flex;
  gap: 5%;
`;

export const MyPoint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 200px;
  border: 2px solid rgb(244 164 96);
  border-radius: 8px;
  svg {
    font-size: 20px;
    color: DarkGreen;
  }
  h2 {
    font-size: 20px;
    display: flex;
    justify-content: center;
    gap: 3%;
  }
`;
export const PTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const PointTitle = styled.h1`
  font-size: 20px;
`;
export const ChangePWModal = styled(Modal)`
  .ant-modal-content {
    width: 400px;
  }
  .ant-btn-primary {
    background-color: coral;
  }
  input:nth-of-type(1) {
    outline: none;
    margin-top: 5px;
    border-color: coral;
  }
`;
