import { EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { CommentImg } from "../write/BoardCommentsWrite.styles";

export const CommentsListMain = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 1198px;
`;
export const DeleteImg = styled(CommentImg)`
  width: 20px;
  margin-bottom: 6px;
`;
export const EditImg = styled(EditOutlined)`
  * {
    width: 20px;
    height: 20px;
    color: salmon;
  }
`;
export const CommentsDateAndBt = styled.div`
  display: flex;
  gap: 40px;
`;
export const CommentsListWriter = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
