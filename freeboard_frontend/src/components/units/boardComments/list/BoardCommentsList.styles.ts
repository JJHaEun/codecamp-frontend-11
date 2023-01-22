import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { CommentImg } from "../write/BoardCommentsWrite.styles";
import { Star } from "../write/BoardCommentsWrite.styles";
import styled from "@emotion/styled";

export const MainCommentList = styled.div`
  border-bottom: 1px solid lightcoral;
  padding-bottom: 30px;
  padding-top: 30px;
`;
export const CommentsListMain = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 1198px;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const DeletOrEditBt = styled.div`
  display: flex;
  gap: 15px;
`;
export const DeleteImg = styled(CommentImg)`
  width: 20px;
  margin-bottom: 6px;
  :hover {
    cursor: pointer;
  }
`;
export const EditImg = styled(EditOutlined)`
  :hover {
    cursor: pointer;
  }
  * {
    width: 20px;
    height: 20px;
    color: salmon;
  }
`;
export const CommentsDateAndBt = styled.div`
  display: flex;
  gap: 80px;
`;
export const CreatedAt = styled.span`
  padding-top: 5px;
  font-size: 10px;
  color: gray;
`;
export const CommentsListWriter = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
export const DefaultStar = styled(Star)`
  color: orangered;
  font-size: 16px;
`;
export const DeleteCommentModal = styled(Modal)`
  .ant-modal-content {
    width: 400px;
  }
  .ant-btn-primary {
    background-color: coral;
  }
`;
export const CommentContens = styled.div`
  padding-top: 10px;
`;
