import styled from "@emotion/styled";
import { UpLoad } from "../write/createUsedItem.styles";

export const ProductDetailWrap = styled.div`
  width: 100%;
  border: 1px solid rgba(95, 158, 160, 0.3);
  padding: 30px;
`;
export const Sellers = styled.div`
  display: flex;
  gap: 2px;
  font-size: 20px;
`;
export const Seller = styled.h1`
  font-size: 20px;
  padding-left: 10px;
`;
export const ProductName = styled.div`
  display: flex;
  gap: 2%;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;
export const ProductRemarks = styled.div`
  font-size: 18px;
`;
export const AddressGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Address = styled.div`
  width: 40%;
  div:nth-of-type(1) {
    font-size: 10px;
  }
  div:nth-of-type(2) {
    font-size: 10px;
  }
  display: flex;
  flex-direction: column;
  gap: 5%;
  padding-top: 30px;
`;
export const ImgWrap = styled.div`
  padding: 30px 0;
  display: flex;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 300px;
`;
export const Contents = styled.div`
  width: 100%;

  padding-top: 20px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
`;
export const Buttons = styled(UpLoad)``;
export const ALink = styled.a`
  text-decoration: none;
`;
