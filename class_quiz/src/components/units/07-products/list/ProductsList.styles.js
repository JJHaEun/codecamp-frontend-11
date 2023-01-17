import styled from "@emotion/styled";

export const TableLine = styled.div`
  border: 1px solid black;
  width: 800px;
  border-radius: 10px;
  margin: 30px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
export const Table = styled.div`
  /* margin: 5px; */
  /* border-bottom: 1px solid; */
  display: flex;
`;
export const CheckLine = styled.span`
  margin: 5px;
`;
export const DeleteButtonLine = styled(CheckLine)``;
export const IDLine = styled.span`
  width: 100px;
  margin: 5px 40px;
  font-size: 12px;
`;
export const Title = styled.div`
  margin-top: 5px;
`;
export const TitleID = styled.span`
  width: 100px;
  margin: 5px 20px;
`;
export const Seller = styled(TitleID)`
  width: 150px;
`;
export const TitleSeller = styled(Seller)`
  margin: 5px 80px;
`;

export const Name = styled(TitleID)`
  width: 200px;
`;
export const TitleName = styled(Name)`
  margin: 5px 70px;
`;
export const DeleteButton = styled.button`
  :hover {
    cursor: pointer;
  }
`;
