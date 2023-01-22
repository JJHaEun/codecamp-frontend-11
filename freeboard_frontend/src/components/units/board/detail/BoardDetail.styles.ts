import styled from "@emotion/styled";
import { CreateBoardBt } from "../list/BoardList.styles";
import { AllBox } from "../write/BoardWrite.styles";

export const DetailPageMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailPage = styled(AllBox)`
  margin-bottom: 0;
`;
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
  border-bottom: 1px solid lightcoral;

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
export const ContentsWrap = styled.div`
  padding-top: 80px;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
`;
export const MainWrap = styled.div`
  padding-top: 40px;
`;
export const ContentsPhoto = styled.div`
  width: 996px;
  /* height: 480px; //후에auto로할것 */
`;
export const ContentsImg = styled.img`
  width: 996px;
  height: 480px;
`;
export const MainContents = styled.div`
  padding-top: 40px;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 120px;
`;
export const VideoBox = styled.div`
  width: 486px;
  height: 240px;
  background-image: url("/video_box.png");
  background-size: cover;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
`;
export const Undder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 122px;
`;
export const LikeDisLike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
export const LikeDisLikeIcons = styled.div`
  display: flex;
  gap: 59px;
`;
export const CountPickImg = styled.img`
  width: 20px;
  height: 18px;
  :hover {
    cursor: pointer;
  }
`;
export const LikeDisLikeCount = styled(LikeDisLikeIcons)``;
export const CountLike = styled.span`
  color: #ffd600;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;
export const CountDisLike = styled(CountLike)`
  color: #828282;
`;
export const ButtonGroup = styled.div`
  width: 1199px;
  display: flex;
  justify-content: center;
  padding: 80px 0;
  gap: 24px;
  border-bottom: 1px solid lightcoral;
  margin-bottom: 80px;
`;
export const MoveToList = styled(CreateBoardBt)`
  width: 179px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;
export const MoveEdit = styled(MoveToList)``;
export const MoveDelete = styled(MoveToList)``;
