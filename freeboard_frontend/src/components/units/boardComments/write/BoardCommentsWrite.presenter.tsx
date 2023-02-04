// import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import * as S from "./BoardCommentsWrite.styles";
import type { IPropsBoardCommentsUI } from "./BoardCommentsWrite.types";

// const customIcons: Record<number, React.ReactNode> = { // 별점 얼굴모양
//   1: <FrownOutlined />,
//   2: <FrownOutlined />,
//   3: <MehOutlined />,
//   4: <SmileOutlined />,
//   5: <SmileOutlined />,
// };
export default function BoardCommentsUI(
  props: IPropsBoardCommentsUI
): JSX.Element {
  return (
    <S.CommentMain>
      <div>
        {props.isEdit !== true && (
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
            // defaultValue={props.el?.writer ?? ""}
            readOnly={Boolean(props.el?.writer)}
            value={props.el?.writer ?? props.writer}
          />
          <S.InputWrites
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
            value={props.password}
          />
        </S.InputsGroup>
        <S.StarRating>
          <S.Star
            allowHalf
            // character={({ index }: { index: number }) => customIcons[index + 1]}
            onChange={props.onChangeRating}
            // defaultValue={props.el?.rating ?? 0}
            value={props.rating !== 0 ? props.rating : props.el?.rating ?? 0}
            // value={props.rating}
          />
        </S.StarRating>
        <S.CommentMainGroup>
          <S.CommentBox
            maxLength={200}
            placeholder="댓글을 작성해주세요"
            onChange={props.onChangeCommentContents}
            // defaultValue={props.el?.contents ?? ""}
            value={
              props.contents !== "" ? props.contents : props.el?.contents ?? ""
            }
            // value={props.contents}
          />
          {props.isEdit !== true && (
            <div>
              {(props.contents !== ""
                ? props.contents.length
                : props.el?.contents.length) ?? 0}
              /200
            </div>
          )}
          {/* contents가 있으면 그 길이를,그게 없고 fetch해서 받은 contents가 있으면 그 길이를 없으면 기본으로 0을보여줌. 기본: 0/200 */}
          <S.CreateCommentBt
            onClick={
              props.isEdit === true
                ? props.onClickEditComment
                : props.onClickCreateBoardComment
            }
          >
            댓글{props.isEdit === true ? "수정" : "등록"}
          </S.CreateCommentBt>
        </S.CommentMainGroup>
      </div>
    </S.CommentMain>
  );
}
