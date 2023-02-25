import styled from "@emotion/styled";
import {
  DeleteImg,
  EditButton,
} from "../../boardComments/list/BoardCommentsList.styles";

export const QuestionWrap = styled.div`
  width: 100%;
  height: 500px;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ADeleteImg = styled(DeleteImg)``;

export const AEdit = styled(EditButton)``;
