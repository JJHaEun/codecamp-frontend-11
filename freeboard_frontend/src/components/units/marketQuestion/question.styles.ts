import styled from "@emotion/styled";

export const CommentTitle = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  padding-bottom: 10px;
`;
export const QuestionTitle = styled.span`
  font-size: 15px;
`;
export const Qcomment = styled.img`
  width: 15px;
  height: 15px;
`;
export const CommentBox = styled.textarea`
  width: 100%;
  height: 80px;
  resize: none;
  padding: 10px;
  border: none;
  background-color: rgba(230, 230, 250, 0.5);
  border-radius: 6px;
  padding: 10px;
  outline: none;
  ::placeholder {
    color: #b7afac;
  }
`;
export const CommentButtonWrap = styled.div`
  padding-top: 10px;
`;
export const Buttons = styled.button`
  width: 70px;
  padding: 2px;
`;
export const ContentsErrM = styled.div`
  font-size: 10px;
  color: red;
`;
