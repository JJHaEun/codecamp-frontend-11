import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormDate>(); // 초기값이 없기에 IFormDate 타입이라고 적어주면 타입추론됨

  interface IFormDate {
    writer: string;
    title: string;
    contents: string;
    boardAddress: {
      addressDetail: string;
    };
  }

  const onClickSubmit = (data: IFormDate): void => {
    console.log(data);
  };
  //   console.log("리랜더링 되나요?"); // 리랜더링 없음
  return (
    <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
      {/*  뽑아서 받아온것을 onClickSubmit에 handleSubmit가 보내줌 */}
      작성자: <input type="text" {...register("writer")} />
      {/*  register에서 뽑아오고, 이름음 writer로 */}
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      {/* 객체인 주소는...?
      boardAddress객체안에 addressDetail을 넣어달라는 ㄴ의미
      */}
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}

// <button type="reset">지우기!!</button> => 해당 form내용이 비워짐
// <button type="submit">등록하자!!</button> => onSubmit이 실행됨  ==> 얘가 기본값
//  버튼에도 onClick이 있고, onSubmit도 있다면 기본이 submit이므로 둘다 실행됨.
// 이 submit을 막으려면 type을 button으로 줘야함.
