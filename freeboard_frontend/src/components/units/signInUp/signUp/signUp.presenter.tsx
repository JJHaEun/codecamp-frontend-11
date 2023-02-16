import type { ISignUpForm } from "./signUp.types";
import * as S from "../signInUp.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../commons/libraries/validations/signValidation";
import { useForm } from "react-hook-form";
import { useMovePage } from "../../../commons/hooks/customs/useMovePage";
import { useOnclickSignUp } from "../../../commons/hooks/customs/sign/useOnclickSignUp";
export default function SignUpUI(): JSX.Element {
  const { onClickMovePage } = useMovePage();
  const { onClickSignUp } = useOnclickSignUp();
  const { register, handleSubmit, formState } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <S.LogWrap>
      <S.LogPageLogo>느린하루</S.LogPageLogo>
      <S.Title>Sign Up</S.Title>
      <S.MainWrap>
        <S.Inputs
          onSubmit={handleSubmit(onClickSignUp)}
          style={{ position: "relative" }}
        >
          <div>
            <S.LogInput
              type="email"
              {...register("email")}
              placeholder="Email"
            />
          </div>
          <div style={{ position: "absolute", top: 50 }}>
            {formState.errors.email?.message}
          </div>
          <div>
            <S.LogInput type="text" {...register("name")} placeholder="Name" />
          </div>
          <div>{formState.errors.name?.message}</div>
          <div>
            <S.LogInput
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <div>{formState.errors.password?.message}</div>
          <S.Sub onClick={onClickMovePage(`/signIn`)}>
            이미 아이디가 있으신가요?
          </S.Sub>
          <S.LogButton>회원가입</S.LogButton>
        </S.Inputs>
      </S.MainWrap>
    </S.LogWrap>
  );
}
