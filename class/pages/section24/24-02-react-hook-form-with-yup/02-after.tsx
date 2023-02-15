import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../24-03-common-components/02-after.validation";

interface IFormDate {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}
export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormDate>({
    resolver: yupResolver(schema),
    mode: "onChange",
  }); // 초기값이 없기에 IFormDate 타입이라고 적어주면 타입추론됨

  const onClickSubmit = (data: IFormDate): void => {
    console.log(data);
  };
  console.log("리랜더링 되나요?"); // 리랜더링 없음
  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      {/* onSubmit의 원래 기능은 페이지 이동. 현재 wrapFormAsync preventDefault 해주어 페이지 이동없음. */}
      {/*  뽑아서 받아온것을 onClickSubmit에 handleSubmit가 보내줌 */}
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      {/*  register에서 뽑아오고, 이름음 writer로 */}
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      {/* 객체인 주소는...?
      boardAddress객체안에 addressDetail을 넣어달라는 ㄴ의미
      */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        GRAPHQL-API 요청하기
      </button>
      {/* formState.isValid => 모두만족한다면 노란색. 아니면 기본 */}
    </form>
  );
}

// <button type="reset">지우기!!</button> => 해당 form내용이 비워짐
// <button type="submit">등록하자!!</button> => onSubmit이 실행됨  ==> 얘가 기본값
//  버튼에도 onClick이 있고, onSubmit도 있다면 기본이 submit이므로 둘다 실행됨.
// 이 submit을 막으려면 type을 button으로 줘야함.
