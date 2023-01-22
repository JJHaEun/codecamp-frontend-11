import * as S from "./BoardCommentsWrite.styles";
import { IPropsBoardCommentsUI } from "./BoardCommentsWrite.types";

export default function BoardCommentsUI(props: IPropsBoardCommentsUI) {
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
            defaultValue={props.el?.writer ? props.el.writer : ""}
            // readOnly={props.el?.writer}
          />
          <S.InputWrites
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
          />
        </S.InputsGroup>
        <S.StarRating>
          <S.Star
            allowHalf
            onChange={props.onChangeRating}
            defaultValue={props.el?.rating ? props.el.rating : 0}
          />
        </S.StarRating>
        <S.CommentMainGroup>
          <S.CommentBox
            maxLength={200}
            placeholder="댓글을 작성해주세요"
            onChange={props.onChangeCommentContents}
            defaultValue={props.el?.contents ? props.el.contents : ""}
          />
          {!props.isEdit && (
            <div>
              {(props.contents
                ? props.contents.length
                : props.el?.contents.length) ?? 0}
              /200
            </div>
          )}
          {/* contents가 있으면 그 길이를,그게 없고 fetch해서 받은 contents가 있으면 그 길이를 없으면 기본으로 0을보여줌. 기본: 0/200 */}
          <S.CreateCommentBt
            onClick={
              props.isEdit
                ? props.onClickEditComment
                : props.onClickCreateBoardComment
            }
          >
            댓글{props.isEdit ? "수정" : "등록"}
          </S.CreateCommentBt>
          {/* {props.isEdit && (
            <button onClick={props.onClickCancelEdit}>취소</button> */}
          {/* )} */}
        </S.CommentMainGroup>
      </div>
    </S.CommentMain>
  );
}
