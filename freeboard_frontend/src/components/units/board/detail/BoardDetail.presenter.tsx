import { Tooltip } from "antd";
import ReactPlayer from "react-player";
import { getDate } from "../../../../commons/libraries/date";
import * as S from "./BoardDetail.styles";
import { IPropsBoardDetailUI } from "./BoardDetail.types";

export default function BoardDetailUI(props: IPropsBoardDetailUI) {
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
                Date: {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreateDate>
            </S.NameDate>
          </S.Profile>
          <S.TopIcons>
            {props.data?.fetchBoard.youtubeUrl && (
              <Tooltip
                title={`${props.data?.fetchBoard.youtubeUrl}`}
                color={"tomato"}
              >
                <S.TopIconLink src="/link_icon.png" />
              </Tooltip>
            )}
            {props.data?.fetchBoard.boardAddress?.address && (
              <Tooltip
                title={`${props.data?.fetchBoard.boardAddress.address}`}
                color={"tomato"}
              >
                <S.TopIconLoc src="/location_icon.png" />
              </Tooltip>
            )}
          </S.TopIcons>
        </S.Upper>
        <S.ContentsWrap>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.MainWrap>
            <S.MainContents>{props.data?.fetchBoard?.contents}</S.MainContents>

            <S.ContentsPhoto>
              <S.ContentsImg src="/image_box.png" />
            </S.ContentsPhoto>
            {/* <S.MainContents>{props.data?.fetchBoard?.contents}</S.MainContents> */}
          </S.MainWrap>
        </S.ContentsWrap>
        <S.Undder>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.VideoBox>
              <ReactPlayer
                className="react-player"
                url={`${props.data?.fetchBoard.youtubeUrl}`}
                playing={false}
                muted={true}
                controls={true}
                light={false}
                pip={true}
              />
            </S.VideoBox>
          )}
          <S.LikeDisLike>
            <S.LikeDisLikeIcons>
              <Tooltip
                title={`${props.data?.fetchBoard.likeCount}`}
                color={"tomato"}
                placement="topRight"
              >
                <S.CountPickImg
                  src="/like_icon.png"
                  onClick={props.onClickLike}
                />
              </Tooltip>
              <Tooltip
                title={`${props.data?.fetchBoard.dislikeCount}`}
                color={"grey"}
              >
                <S.CountPickImg
                  src="/dislike_icon.png"
                  onClick={props.onClickDisLike}
                />
              </Tooltip>
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
        <S.MoveEdit onClick={props.onClickMoveToEdit}>수정하기</S.MoveEdit>
        <S.MoveDelete onClick={props.onClickDelete}>삭제하기</S.MoveDelete>
      </S.ButtonGroup>
    </S.DetailPageMain>
  );
}
