import styled from "@emotion/styled";
import { Modal } from "antd";

export const AddressModal = styled(Modal)`
  .ant-modal-close-x {
    display: none;
  }
  .ant-btn-primary {
    display: none;
  }
  .ant-btn-default {
    border-color: none;
  }
  .ant-btn {
    border-color: coral;
    :hover {
      border-color: coral;
      color: coral;
    }
  }
`;
