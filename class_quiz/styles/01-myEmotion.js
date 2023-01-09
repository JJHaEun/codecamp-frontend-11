import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const MyBox = styled.div`
  width: 640px;

  padding-top: 40px;
`;
export const SearchBarLine = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
`;
export const Title = styled.h1`
  font-size: 40px;
`;
export const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-left: 5px;
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const RightArrow = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;
export const ImgProfile = styled.img`
  width: 60px;
  height: 60px;
`;
export const SubTitle = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 0 20px;
  margin: 15px 0;
  border-bottom: 1px solid #cacaca;
`;
export const SubTitleList = styled.span`
  color: #cacaca;
  font-size: 30px;
  font-weight: bold;
`;

export const SubTitleListCheck = styled.span`
  color: #ff1b6d;
  font-size: 30px;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 15px;
`;
export const Q_tag = styled.div`
  color: #adadad;
`;
export const Questions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagAndQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Arrow = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`;
export const QuestionsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-bottom: 1px solid #cacaca;
  padding-bottom: 25px;
  padding-left: 40px;
`;

export const UndderIcons = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-around;
`;
export const UndderImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const UndderArr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
export const MyCheck = styled.span`
  color: #ff1b6d;
`;
export const SearchIcon = styled(SearchOutlined)`
  font-size: 32px;
`;
