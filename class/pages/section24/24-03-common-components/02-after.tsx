import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../24-02-react-hook-form-with-yup/02-after.validation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

interface IFormDate {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
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
      작성자:
      <Input01 register={register("writer")} type="text" />
      {/*  변수에 담아 보내주기 props로 받아서 스프래드로.. */}
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      {/*  register에서 뽑아오고, 이름음 writer로 */}
      제목:
      <Input01 register={register("title")} type="text" />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <Input01 register={register("contents")} type="text" />
      {/* type도 props로 넘겨줌 */}
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      {/* 객체인 주소는...?
      boardAddress객체안에 addressDetail을 넣어달라는 ㄴ의미
      */}
      <Button01 title="등록하기" isActive={formState.isValid} />
      {/*  Button01컴포넌트에 isActive라는 키로 formState.isValid를 넘겨줌 */}
    </form>
  );
}

// <button type="reset">지우기!!</button> => 해당 form내용이 비워짐
// <button type="submit">등록하자!!</button> => onSubmit이 실행됨  ==> 얘가 기본값
//  버튼에도 onClick이 있고, onSubmit도 있다면 기본이 submit이므로 둘다 실행됨.
// 이 submit을 막으려면 type을 button으로 줘야함.
