import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "../../../styles/boardsDetail";
import { getDate } from "../../date";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(data);
  return (
    <S.DetailPageMain>
      {/* 여기는 버튼부분과 포함해 가운데 정렬용 */}
      <S.DetailPage>
        {/* 여기는 상세페이지 부분 */}
        <S.Upper>
          <S.Profile>
            <S.ProfileImg src="/profile_icon.png" />
            <S.NameDate>
              <S.WriterName>{data?.fetchBoard?.writer}</S.WriterName>
              <S.CreateDate>
                Date : {getDate(data?.fetchBoard?.createdAt)}
              </S.CreateDate>
            </S.NameDate>
          </S.Profile>
          <S.TopIcons>
            <S.TopIconLink src="/link_icon.png" />
            <S.TopIconLoc src="/location_icon.png" />
          </S.TopIcons>
        </S.Upper>
        <S.ContentsWrap>
          <S.Title>{data?.fetchBoard?.title}</S.Title>
          <S.MainWrap>
            <S.ContentsPhoto>
              <S.ContentsImg src="/image_box.png" />
            </S.ContentsPhoto>
            <S.MainContents>{data?.fetchBoard?.contents}</S.MainContents>
          </S.MainWrap>
        </S.ContentsWrap>
        <S.Undder>
          <S.VideoBox>{/* <img src="/video_box.png" /> */}</S.VideoBox>
          <S.LikeDisLike>
            <S.LikeDisLikeIcons>
              <S.CountPickImg src="/like_icon.png" />
              <S.CountPickImg src="/dislike_icon.png" />
            </S.LikeDisLikeIcons>
            <S.LikeDisLikeCount>
              <S.CountLike>{data?.fetchBoard?.likeCount}</S.CountLike>
              <S.CountDisLike>
                {data?.fetchBoard?.dislikeCount}
                {/* 1259 */}
              </S.CountDisLike>
            </S.LikeDisLikeCount>
          </S.LikeDisLike>
        </S.Undder>
      </S.DetailPage>
      <S.ButtonGroup>
        <S.MoveToList>목록으로</S.MoveToList>
        <S.MoveEdit>수정하기</S.MoveEdit>
      </S.ButtonGroup>
    </S.DetailPageMain>
  );
}
