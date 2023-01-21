import * as S from "./BoardCommentsWrite.styles";
import { Rate } from "antd";

export default function BoardCommentsUI(props) {
  return (
    <S.CommentMain>
      <div>
        {!props.isEdit && (
          <S.CommentTitleMain>
            <S.CommentImg src="/comments_icon.png" />
            <S.CommentTitle>댓글</S.CommentTitle>
          </S.CommentTitleMain>
        )}
        <S.InputsGroup>
          <S.InputWrites
            type="text"
            placeholder="작성자"
            onChange={props.onChangeCommentWriter}
          />
          <S.InputWrites
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
          />
        </S.InputsGroup>
        <S.StarRating>
          <S.Star allowHalf onChange={props.onChangeRating} />
        </S.StarRating>
        <S.CommentMainGroup>
          <S.CommentBox
            maxLength={100}
            placeholder="댓글을 작성해주세요"
            onChange={props.onChangeCommentContents}
          />
          <S.CreateCommentBt
            onClick={
              props.Edit
                ? props.onClickEditComment
                : props.onClickCreateBoardComment
            }
          >
            댓글{props.isEdit ? "수정" : "등록"}
          </S.CreateCommentBt>
        </S.CommentMainGroup>
      </div>
    </S.CommentMain>
  );
}
