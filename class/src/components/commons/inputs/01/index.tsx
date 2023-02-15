import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IInputProps): JSX.Element {
  return (
    <>
      <input type={props.type ?? "text"} {...props.register} />
    </>
    // 안들어와도된다고 타입에 ?를 쓰고, 만약 안들어왔다면 text타입으로 준다라고 써도됨.
  );
}
