import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import * as S from "../../../styles/boardsDetail";

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
              <S.CreateDate>Date : 2021.02.18</S.CreateDate>
            </S.NameDate>
          </S.Profile>
          <S.TopIcons>
            <S.TopIconLink src="/link_icon.png" />
            <S.TopIconLoc src="/location_icon.png" />
          </S.TopIcons>
        </S.Upper>
        <div>
          <h1>{data?.fetchBoard?.title}</h1>
          <img src="/image_box.png" />
          <div>{data?.fetchBoard?.contents}</div>
        </div>
        <div>
          <div>
            <img src="/video_box.png" />
          </div>
          <div>
            <div>
              <img src="/like_icon.png" />
              <img src="/dislike_icon.png" />
            </div>
            <div>
              <span>{data?.fetchBoard?.likeCount}</span>
              <span>{data?.fetchBoard?.dislikeCount}</span>
            </div>
          </div>
        </div>
      </S.DetailPage>
      <div>
        <button>목록으로</button>
        <button>수정하기</button>
      </div>
    </S.DetailPageMain>
  );
}
