import styled from "@emotion/styled";
import { Modal } from "antd";
import type { IProps } from "./BoardWrite.types";

export const Addressmodal = styled(Modal)`
  .ant-modal-content {
    width: 400px;
  }
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
export const AllBox = styled.div`
  width: 1200px;
  /* height: 1847px; */

  margin: 100px 0;
  padding-top: 60px;
  padding-bottom: 100px;
  padding-left: 101px;
  padding-right: 103px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px tomato;
`;
export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 53.28px;
`;
export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 16px;
`;

export const Label2 = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
export const ErrMassages = styled.div`
  font-size: 10px;
  color: red;
  position: absolute;
  top: 15.5%;
`;
export const ErrMassagesContents = styled(ErrMassages)`
  top: 3.5%;
`;
export const WritePwArr = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  /* padding-top: 30px; */
  /* gap: 5px; */
  position: relative;
`;
export const WritePwInput = styled.input`
  width: 485px;
  height: 52px;
  padding: 16px;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
  font-size: 16px;
  outline: none;
`;
export const WritePw = styled.div`
  display: flex;
  gap: 24px;

  padding-top: 80px;
`;
export const TitleArr = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  padding-bottom: 40px;
  position: relative;
`;
export const LongInput = styled.input`
  width: 996px;
  height: 52px;
  /* margin-bottom: 20px; */
  border: 1px solid #bdbdbd;

  padding: 16px;
  ::placeholder {
    color: #bdbdbd;
  }
  font-size: 16px;
  outline: none;
`;
export const ContentsArr = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  position: relative;
`;
export const ContentArea = styled.textarea`
  resize: none;
  width: 996px;
  height: 480px;

  padding: 16px;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
  font-size: 16px;
  outline: none;
`;
export const AddressArr = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AddressSearch = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 16px;
  padding-top: 5px;
`;
export const Address0 = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  ::placeholder {
    color: #bdbdbd;
  }
  :read-only {
    color: black;
  }
  font-size: 16px;
  outline: none;
`;
export const LongInputAddress = styled.input`
  width: 996px;
  height: 52px;
  margin-bottom: 30px;
  border: 1px solid #bdbdbd;
  padding: 16px;
  ::placeholder {
    color: #bdbdbd;
  }
  font-size: 16px;
  outline: none;
`;
export const SearchButton = styled.button`
  color: #ffffff;
  background-color: black;
  width: 124px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
  border: none;
`;

export const UploadBox = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 16px;
`;
export const UploadDiv = styled.div`
  display: flex;
  background-color: #bdbdbd;
  width: 78px;
  height: 78px;
  justify-content: center;
  align-items: center;
`;
export const UploadBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #4f4f4f;
  font-size: 12px;
  font-weight: 500;
  :hover {
    cursor: pointer;
  }
`;
export const UploadAndSetting = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 730px;
`;
export const Submit = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "#ffd600" : "")};
  padding: 0;
  width: 179px;
  height: 52px;
  border: none;
  :hover {
    cursor: ${(props: IProps) => (props.isActive ? "pointer" : "")};
  }
`;
export const Lincked = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 14.09px; */
  padding-top: 37px;
  padding-bottom: 40px;
`;
export const Choice = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
export const ChoiceMain = styled.div`
  display: flex;
  gap: 22px;
  padding-bottom: 80px;
  padding-top: 5px;
`;
export const ChoiceArr = styled.div`
  display: flex;
  gap: 10px;

  align-items: center;
  /* text-align: center; */
  /* justify-content: center; */
`;
export const Radio = styled.input`
  background-color: #ffff;
  /* appearance: none; */
  width: 20px;
  height: 20px;
  /* margin-left: 16px; */
  border: 1px solid #ffd600;

  border-radius: 100%;
  :checked {
    accent-color: #ffd600;
  }
  :hover {
    cursor: pointer;
  }
`;
// input[type='radio'] {
//   background-color: $white-color;
//   border: 2px solid $font-color-3;
// }
// input[type='radio']:checked {
//   background-color: $font-color-2;
// }
