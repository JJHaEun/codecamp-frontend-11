import { useQuery, gql, useMutation } from "@apollo/client";
import { Fragment } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      _id
      message
    }
  }
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id), // html부분이기에 문자열임. 따라서 숫자로 바꾸기 // 버튼 클릭시 삭제는 되나 새로고침해야 반영됨.
      },
      refetchQueries: [{ query: FETCH_BOARDS }], // 삭제 api가 나가고 DB에서 삭제된 후, FETCH_BOARDS가 refetch가 이루어짐.
    });
    // 클릭한 것을 삭제. 어떤것을 클릭하거나 변화하게되면 event라는것이 들어옴.!!
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        // 특별한 이유가 없으면 Fragment로 감싸자!! div는 하나 더 그려야되서 조금 느려짐(큰 차이가 있는것은 아니나 알아두기)
        // 프래그먼트란? <></> , <Fragment></Fragment>
        // 프레그먼트에 key를 줄때는 <Fragment key={}></Fragment> 얘를 사용.
        <div key={el.number}>
          {/* 인덱스는  게시글을 삭제시 다음 게시글이 올라오면서 기존 index와 동일한 값을 ㅇ갖게됨. 즉, 고유한값(유일한값)이 아님. */}
          {/* key를 사용해 각각이 독립된것임을 알려줌. map에는 key를 사용하기!! */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          {/* inline요소여야 한줄로 보이게되니 span태그로 감싸줌 */}
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            {/* 빈 공간 만들기 위해 span태그로 만들어주고 그 안에 버튼넣음 */}
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
