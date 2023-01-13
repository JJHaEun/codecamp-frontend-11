import styled from "@emotion/styled";
import { AllBox } from "./boardsWrite";

export const DetailPageMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailPage = styled(AllBox)``;
export const Profile = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 16.67px;
`;
export const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;
export const Upper = styled.div`
  display: flex;
  gap: 718px;
  width: 996px;
  border-bottom: 1px solid #bdbdbd;

  padding-bottom: 20px;
`;
export const ProfileImg = styled.img`
  width: 46.67px;
  height: 46.67px;
`;
export const WriterName = styled.span`
  /* width: 67px; */
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;
export const CreateDate = styled.span`
  width: 126px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;
export const TopIcons = styled.span`
  display: flex;
  gap: 26.67px;
`;
export const TopIconLink = styled.img`
  width: 32px;
  height: 32px;
`;
export const TopIconLoc = styled(TopIconLink)``;
