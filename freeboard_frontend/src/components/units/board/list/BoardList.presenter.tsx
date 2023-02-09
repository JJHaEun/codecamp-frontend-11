import { getDate } from "../../../../commons/libraries/date";
import type { IBoard } from "../../../../commons/types/generated/types";
import PagiNationPage from "../../../commons/pagination/boardsPagination/pagination.container";
import * as S from "./BoardList.styles";
import type { IPropsBoardListUI } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import SearchBoard from "../../../commons/search/searchBoard/Searchboard.container";

export default function BoardListUI(props: IPropsBoardListUI): JSX.Element {
  return (
    // <S.BoardListMain>
    //   <S.ButtonWrap>
    //     <S.Table>
    //       <S.TableTopLine>
    //         <S.BoardNumberTitle>B#N</S.BoardNumberTitle>
    //         <S.BoardMainTitle>제목</S.BoardMainTitle>
    //         <S.BoardWriterTitle>작성자</S.BoardWriterTitle>
    //         <S.BoardDateTitle>날짜</S.BoardDateTitle>
    //       </S.TableTopLine>

    //       {props.data?.fetchBoards.map((el: IBoard) => (
    //         <S.TableBody
    //           key={el._id}
    //           id={el._id}
    //           onClick={props.onClickDetailPage}
    //         >
    //           <S.BoardNumber>
    //             {el._id.substring(el._id.length - 4, el._id.length)}
    //           </S.BoardNumber>
    //           <S.BoardTitle>{el.title}</S.BoardTitle>
    //           <S.BoardWriter>{el.writer}</S.BoardWriter>
    //           <S.TableDate>{getDate(el.createdAt)}</S.TableDate>
    //         </S.TableBody>
    //       ))}
    //     </S.Table>
    //     <S.CreateBoardBt onClick={props.onClickCreateBoard}>
    //       글쓰기
    //     </S.CreateBoardBt>
    //   </S.ButtonWrap>
    // </S.BoardListMain>
    <>
      <SearchBoard refetch={props.refetch} setKeyWord={props.setKeyWord} />
      <S.BoardListMain>
        <S.ListWrap>
          <S.TableLine>
            <S.BoardNumberTitle>B#N</S.BoardNumberTitle>
            <S.BoardMainTitle>제목</S.BoardMainTitle>
            <S.BoardWriterTitle>작성자</S.BoardWriterTitle>
            <S.BoardDateTitle>날짜</S.BoardDateTitle>
          </S.TableLine>
          {props.data?.fetchBoards.map((el: IBoard) => (
            <S.TableBody
              key={el._id}
              id={el._id}
              onClick={props.onClickDetailPage}
            >
              <S.BoardNumber>
                {el._id
                  .toUpperCase()
                  .substring(el._id.length - 4, el._id.length)}
              </S.BoardNumber>
              <S.BoardTitle>
                {el.title
                  .replaceAll(
                    props.keyWord,
                    `@#$#@%$^%&^*${props.keyWord}@#$#@%$^%&^*`
                  )
                  .split("@#$#@%$^%&^*")
                  .map((el) => (
                    <S.SearchKeyWord
                      key={uuidv4()}
                      el={el}
                      keyWord={props.keyWord}
                    >
                      {el}
                    </S.SearchKeyWord>
                  ))}
              </S.BoardTitle>
              <S.BoardWriter>{el.writer}</S.BoardWriter>
              <S.TableDate>{getDate(el.createdAt)}</S.TableDate>
            </S.TableBody>
          ))}
        </S.ListWrap>
        <S.ButtonWrap>
          <S.CreateBoardBt onClick={props.onClickCreateBoard}>
            글쓰기
          </S.CreateBoardBt>
        </S.ButtonWrap>
        <PagiNationPage refetch={props.refetch} />
      </S.BoardListMain>
    </>
  );
}
