import { useQuery, gql, useMutation } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 변수들의 타입을 적어줌
    createBoard(createBoardInput: $createBoardInput) {
      # 변수를 $writer식으로 넣어주고
      _id
      writer
      title
      contents
    }
  }
`;
export default function MapBoardPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  interface IPrev {
    __ref: string;
  }
  const onClickDelete = (boardId: string) => (): void => {
    void deleteBoard({
      variables: {
        boardId,
        // html부분이기에 문자열임. 따라서 숫자로 바꾸기 // 버튼 클릭시 삭제는 되나 새로고침해야 반영됨.
      },
      // refetchQueries: [{ query: FETCH_BOARDS }], // 삭제 api가 나가고 DB에서 삭제된 후, FETCH_BOARDS가 refetch가 이루어짐.
      // 지워진 아이디가 아폴로에서도 지워지고, 다시 업데이트됨
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev: IPrev[], { readField }) => {
              // IPrev라는 타입의 배열이라는 말
              const deletedId = data.deleteBoard; // 삭제된 아이디
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // 다른것만 필터링해줘// 필터된것들(삭제가 적용된..)
              // readField("_id",el) readField헤서 _id를 꺼내와줘. el에서
              return [...filteredPrev]; // 그런데, prev안의 el이 객체로 들어오지않음. __ref라는 키에 해당 주소만 가지고있음. 그래서 ._id가없고 이 주소를 타고가서 ._id를 찾아와야함.
            },
          },
        });
      },
    });
  };
  const onClickSubmit = (): void => {
    void 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "제목입니다",
          contents: "내용압니다",
          password: "12",
        },
      },
      update(cache, { data }) {
        // 두번째인자로는 response가 들어오는데 그 객체에서 data를뽑아씀
        cache.modify({
          fields: {
            // data.createBoard /// {writer:"철수" ...}
            fetchBoards: (prev) => {
              // data.fetchBoard를 사용하는모든곳이 다 바뀐다.
              // 배열에 기존것을 받아옴
              //   return [...prev, data.createBoard]; // 음답값까지 추가(추가된최신게 위에오게 둘 순서 바꿔주기)
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });

    console.log(result);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>식제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
