import styled from "@emotion/styled";
import { FcLike } from "react-icons/fc";
import { SearchButton } from "../write/createUsedItem.styles";

interface IPropsKeyWord {
  el: string;
  keyWord: string;
}

export const InfiniteWrap = styled.div`
  width: 100%;
  height: 700px;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
export const SearchKeyWord = styled.span`
  color: ${(props: IPropsKeyWord) =>
    props.el === props.keyWord ? "rgb(95, 158, 160)" : ""};
  font-weight: ${(props: IPropsKeyWord) =>
    props.el === props.keyWord ? "600" : ""};
  font-size: 20px;
`;
export const SellerName = styled.h1`
  font-size: 23px;
`;
export const ProductNameTitle = styled.span`
  padding-right: 1%;
`;

export const FooterWrap = styled.footer`
  display: flex;
  gap: 4%;
  position: relative;
  padding: 5px 0 20px;
`;
export const TimeAndPick = styled.div`
  color: silver;
  font-size: 5px;
`;
export const PickIcon = styled(FcLike)`
  width: 10px;
  padding-right: 2px;
`;
export const PickNum = styled.div`
  font-size: 8px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50px;
  bottom: 20px;
`;
export const ProductImgWrap = styled.div`
  width: 100%;
  height: 150px;
  padding-bottom: 10px;
`;

export const ProductImg = styled.img`
  height: 100%;
  width: 100%;

  object-fit: scale-down;
`;
export const Main = styled.div`
  width: 30%;
  padding-bottom: 50px;
  height: 300px;
  border: 1px solid rgb(95, 158, 160);
  margin-bottom: 30px;
  padding: 20px;
  @media (max-width: 700px) {
    width: 40%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const MainWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
export const MoveCreate = styled(SearchButton)`
  a {
    color: black;
    text-decoration: none;
  }
`;
