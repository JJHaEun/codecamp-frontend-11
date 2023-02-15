import { UseFormRegisterReturn } from "react-hook-form";

interface IInputs01Props {
  type: "text" | "password";
  placeholder: "작성자" | "내용" | "비밀번호" | "제목";
  register: UseFormRegisterReturn;
}

export default function Inputs01(props: IInputs01Props): JSX.Element {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      />
    </>
  );
}
