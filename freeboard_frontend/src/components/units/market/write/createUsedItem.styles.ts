import styled from "@emotion/styled";
import { Modal } from "antd";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

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
export const CreateUpdate = styled.div`
  width: 100%;
  border: 1px solid rgba(95, 158, 160, 0.3);
  padding: 30px 30px;
  /* padding: 0 10px 20px 10px; */
`;
export const TitleWrap = styled.div`
  height: 150px;
  background-color: rgba(95, 158, 160, 0.3);
  display: flex;

  align-items: center;
`;
export const Title = styled.h1`
  font-size: 25px;
  padding-left: 30px;
`;
export const WrapCol = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const ErrorM = styled.div`
  position: absolute;
  top: 60px;
  left: 5px;
  font-size: 10px;
  color: red;
`;
export const WrapRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding-top: 30px;
`;

export const Inputs = styled.input`
  height: 30px;
  outline: none;
  border: none;
  background-color: BlanchedAlmond;
  padding: 10px;
`;
export const Remarks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: relative;
`;
export const RemarksErrM = styled.div`
  position: absolute;
  top: 90px;
  left: 5px;
  font-size: 10px;
  color: red;
`;
export const InputLog = styled(Inputs)`
  width: 100%;
`;

export const ProductDetailGroup = styled.div`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 3%;
`;
export const ProductDetailErrM = styled.div`
  position: absolute;
  top: 5px;
  left: 80px;
  font-size: 10px;
  color: red;
`;
export const Detail = styled(ReactQuill)`
  height: 200px;
`;
export const AddressPhoto = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AddressInputs = styled.input`
  outline: none;
  height: 30px;
  border: none;
  background-color: rgba(95, 158, 160, 0.1);
  padding: 10px;
`;
export const Address = styled.div`
  display: flex;
  gap: 3%;
`;
export const AddressDetailAndAddress = styled.div`
  display: flex;
  gap: 3%;
`;
export const AddressAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const AddressDetail = styled(AddressInputs)`
  width: 30vw;
`;
export const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  padding-bottom: 5px;
`;
export const Photos = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Imgs = styled.div`
  background-color: rgba(95, 158, 160, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  :hover {
    cursor: pointer;
  }
`;
export const ImgGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const SearchButton = styled.button`
  background-color: white;
  border: none;
  border: 1px solid rgb(95, 158, 160);
  padding: 5px;
  border-radius: 8px;
  position: relative;
  :hover {
    cursor: pointer;
  }
  :active {
    top: 1px;
    left: 1px;
  }
`;
export const UpLoad = styled(SearchButton)`
  width: 100px;
`;
