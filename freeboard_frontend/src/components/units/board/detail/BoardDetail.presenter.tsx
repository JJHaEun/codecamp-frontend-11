import { Tooltip } from "antd";
import ReactPlayer from "react-player";
import { getDate } from "../../../../commons/libraries/date";
import * as S from "./BoardDetail.styles";
import type { IPropsBoardDetailUI } from "./BoardDetail.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";

export default function BoardDetailUI(props: IPropsBoardDetailUI): JSX.Element {
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
            {props.data?.fetchBoard.youtubeUrl !== "" &&
              props.data?.fetchBoard.youtubeUrl !== " " && (
                <Tooltip
                  title={`${String(props.data?.fetchBoard.youtubeUrl)}`}
                  color={"tomato"}
                >
                  <FontAwesomeIcon icon={faLink} color="#4682B4" />
                </Tooltip>
              )}
            {props.data?.fetchBoard.boardAddress?.address !== "" ||
              (props.data?.fetchBoard.boardAddress?.address !== undefined && (
                <Tooltip
                  title={`${String(
                    props.data?.fetchBoard.boardAddress?.address
                  )} ${String(
                    props.data?.fetchBoard.boardAddress?.addressDetail
                  )}`}
                  color={"tomato"}
                  placement="topRight"
                >
                  <span>
                    <FontAwesomeIcon icon={faMapLocationDot} color="	#4682B4" />
                  </span>
                </Tooltip>
              ))}
          </S.TopIcons>
        </S.Upper>
        <S.ContentsWrap>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.MainWrap>
            <S.MainContents>{props.data?.fetchBoard?.contents}</S.MainContents>

            <S.ContentsPhoto>
              {props.data?.fetchBoard.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.ContentsImg
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                    // src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}` 이렇게하면 0번째사진 뽑을 수  있음. 아마 el[0]이 아닐까?
                  />
                ))}
            </S.ContentsPhoto>
            {/* <S.MainContents>{props.data?.fetchBoard?.contents}</S.MainContents> */}
          </S.MainWrap>
        </S.ContentsWrap>
        <S.Undder>
          {props.data?.fetchBoard.youtubeUrl !== "" &&
            props.data?.fetchBoard.youtubeUrl !== " " &&
            props.data?.fetchBoard.youtubeUrl !== null && (
              <S.VideoBox>
                <ReactPlayer
                  className="react-player"
                  url={`${String(props.data?.fetchBoard.youtubeUrl ?? "")}`}
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
                title={`${Number(props.data?.fetchBoard.likeCount)}`}
                color={"tomato"}
                placement="topRight"
              >
                <S.CountPickImg
                  src="/like_icon.png"
                  onClick={props.onClickLike}
                />
              </Tooltip>
              <Tooltip
                title={`${Number(props.data?.fetchBoard.dislikeCount)}`}
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
