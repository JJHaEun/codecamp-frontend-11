import { getDate } from "../../../../commons/libraries/date";
import BoardComments from "../write/BoardCommentsWrite.container";
import * as S from "./BoardCommentsList.styles";
import type { IPropsBoardCommentsListUI } from "./BoardCommentsList.types";
// import BoardCommentsListItems from "./BoardCommentsListItems";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function BoardCommentsListUI(
  props: IPropsBoardCommentsListUI
): JSX.Element {
  return (
    <S.CommentsListMain>
      <S.CommentsList>
        {props.data?.fetchBoardComments.map((el) => (
          <S.MainCommentList key={el._id}>
            {/* <BoardCommentsListItems
              el={el}
              isEdit={props.isEdit}
              isOpen={props.isOpen}
              onClickCheckDelete={props.onClickCheckDelete}
              onChangeDeleteCommentsPassword={
                props.onChangeDeleteCommentsPassword
              }
              onClickDeleteComment={props.onClickDeleteComment}
              onClickHideModal={props.onClickHideModal}
              onClickEdit={props.onClickEdit}
              setIsEdit={props.setIsEdit}
            /> */}
            {props.isOpen && (
              <S.DeleteCommentModal
                title="댓글 삭제"
                open={true}
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
            {!props.isEdit && (
              <>
                <div>
                  <S.CommentsListWriter>{el.writer}</S.CommentsListWriter>
                  <S.CommentsDateAndBt>
                    <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                    <S.DeletOrEditBt>
                      <S.DeleteImg
                        src="/delete_icon.png"
                        alt="삭제아이콘"
                        onClick={props.onClickCheckDelete}
                        id={el._id}
                      />
                      <S.EditButton onClick={props.onClickEdit} id={el._id}>
                        <S.EditIcon icon={faPenToSquare} />
                      </S.EditButton>
                    </S.DeletOrEditBt>
                  </S.CommentsDateAndBt>
                </div>
                <S.DefaultStar allowHalf disabled value={el.rating} />
                <S.CommentContens>{el.contents}</S.CommentContens>
              </>
            )}
            {props.isEdit && (
              <BoardComments
                el={el}
                isEdit={true}
                setIsEdit={props.setIsEdit}
                boardCommentIdEdit={props.boardCommentIdEdit}
              />
            )}
          </S.MainCommentList>
        ))}
      </S.CommentsList>
    </S.CommentsListMain>
  );
}
