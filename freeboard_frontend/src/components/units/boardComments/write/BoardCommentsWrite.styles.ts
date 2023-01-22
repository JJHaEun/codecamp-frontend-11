import styled from "@emotion/styled";
import { Rate } from "antd";
import { CreateBoardBt } from "../../board/list/BoardList.styles";

export const CommentMain = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* align-items: center; */
`;
export const CommentTitleMain = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 10px;
`;
export const CommentImg = styled.img`
  width: 30px;
`;
export const CommentTitle = styled.span`
  padding-top: 8px;
  font-weight: 600;
  font-size: 20px;
`;
export const InputWrites = styled.input`
  height: 40px;
  border: 2px solid lightcoral;
  border-radius: 6px;
  outline: none;
  width: 150px;
  ::placeholder {
    color: #b7afac;
  }
  padding-left: 10px;
`;
export const InputsGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;
export const StarRating = styled.div`
  margin: 8px 0;
`;
export const Star = styled(Rate)`
  color: orangered;
`;
export const CommentMainGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 80px;
  border-bottom: 1px solid lightcoral;
  padding-bottom: 30px;
`;
export const CommentBox = styled.textarea`
  width: 1198px;
  height: 150px;
  resize: none;
  outline: none;
  border: 1.5px solid indianred;
  border-radius: 6px;
  padding: 10px;
  ::placeholder {
    color: #b7afac;
  }
`;
export const CreateCommentBt = styled(CreateBoardBt)`
  height: 45px;
  width: 120px;
  text-align: center;
`;
