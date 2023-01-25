import { getDate } from "../../../../commons/libraries/date";
import BoardComments from "../write/BoardCommentsWrite.container";
import * as S from "./BoardCommentsList.styles";
import { IPropsBoardCommentsListUI } from "./BoardCommentsList.types";

export default function BoardCommentsListUI(props: IPropsBoardCommentsListUI) {
  return (
    <S.CommentsListMain>
      <S.CommentsList>
        {props.data?.fetchBoardComments.map((el) => (
          <S.MainCommentList key={el._id}>
            {/* <BoardCommentsListItems el={el} /> */}
            {props.isOpen && (
              <S.DeleteCommentModal
                title="댓글 삭제"
                visible={true}
                onOk={props.onClickDeleteComment}
                onCancel={props.onClickHideModal}
                okText="삭제"
                cancelText="취소"
              >
                <p>비밀번호를 입력하세요</p>
                <input
                  type="password"
                  onChange={props.onChangeDeleteCommentsPassword}
                />
              </S.DeleteCommentModal>
            )}

            <div>
              <S.CommentsListWriter>{el.writer}</S.CommentsListWriter>
              <S.CommentsDateAndBt>
                <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                <S.DeletOrEditBt>
                  <S.DeleteImg
                    src="/delete_icon.png"
                    onClick={props.onClickCheckDelete}
                    id={el._id}
                  />
                  <S.EditImg onClick={props.onClickEdit} id={el._id} />
                </S.DeletOrEditBt>
              </S.CommentsDateAndBt>
            </div>
            <S.DefaultStar allowHalf disabled value={el.rating} />
            <S.CommentContens>{el.contents}</S.CommentContens>
            {props.isEdit && (
              <BoardComments
                el={el}
                isEdit={true}
                setIsEdit={props.setIsEdit}
              />
            )}
          </S.MainCommentList>
        ))}
      </S.CommentsList>
    </S.CommentsListMain>
  );
}
