import { getDate } from "../../../../commons/date";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.DetailPageMain>
      {/* 여기는 버튼부분과 포함해 가운데 정렬용 */}
      <S.DetailPage>
        {/* 여기는 상세페이지 부분 */}
        <S.Upper>
          <S.Profile>
            <S.ProfileImg src="/profile_icon.png" />
            <S.NameDate>
              <S.WriterName>{props.data?.fetchBoard?.writer}</S.WriterName>
              <S.CreateDate>
                Date : {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreateDate>
            </S.NameDate>
          </S.Profile>
          <S.TopIcons>
            <S.TopIconLink src="/link_icon.png" />
            <S.TopIconLoc src="/location_icon.png" />
          </S.TopIcons>
        </S.Upper>
        <S.ContentsWrap>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.MainWrap>
            <S.ContentsPhoto>
              <S.ContentsImg src="/image_box.png" />
            </S.ContentsPhoto>
            <S.MainContents>{props.data?.fetchBoard?.contents}</S.MainContents>
          </S.MainWrap>
        </S.ContentsWrap>
        <S.Undder>
          <S.VideoBox>{/* <img src="/video_box.png" /> */}</S.VideoBox>
          <S.LikeDisLike>
            <S.LikeDisLikeIcons>
              <S.CountPickImg
                src="/like_icon.png"
                onClick={props.onClickLike}
              />
              <S.CountPickImg
                src="/dislike_icon.png"
                onClick={props.onClickDisLike}
              />
            </S.LikeDisLikeIcons>
            <S.LikeDisLikeCount>
              <S.CountLike>{props.data?.fetchBoard?.likeCount}</S.CountLike>
              <S.CountDisLike>
                {props.data?.fetchBoard?.dislikeCount}
                {/* 1259 */}
              </S.CountDisLike>
            </S.LikeDisLikeCount>
          </S.LikeDisLike>
        </S.Undder>
      </S.DetailPage>
      <S.ButtonGroup>
        <S.MoveToList onClick={props.onClickMoveToList}>목록으로</S.MoveToList>
        <S.MoveEdit>수정하기</S.MoveEdit>
        <S.MoveDelete>삭제하기</S.MoveDelete>
      </S.ButtonGroup>
    </S.DetailPageMain>
  );
}
