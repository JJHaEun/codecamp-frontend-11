import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../../commons/libraries/asyncFunc";
import { schemaSignIn } from "../../../../commons/libraries/validations/signValidation";
import { useOnclickSignIn } from "../../../commons/hooks/customs/sign/useOnclickSignIn";
// import { useRefHooks } from "../../../commons/hooks/customs/sign/useRefHooks";
import { useMovePage } from "../../../commons/hooks/customs/useMovePage";
import * as S from "../signInUp.styles";
import type { ISignForm } from "./signIn.types";

export default function SignInUI(): JSX.Element {
  const { onClickMovePage } = useMovePage();

  const { register, handleSubmit, formState } = useForm<ISignForm>({
    resolver: yupResolver(schemaSignIn),
    mode: "onSubmit",
  });
  const { onClickSignIn } = useOnclickSignIn();
  //   const { inputRef } = useRefHooks();
  return (
    <S.LogWrap>
      <S.LogPageLogo>느린하루</S.LogPageLogo>
      <S.Title>Sign In</S.Title>
      <S.MainWrap>
        <S.Inputs onSubmit={wrapFormAsync(handleSubmit(onClickSignIn))}>
          <div>
            <S.LogInput
              type="email"
              {...register("email")}
              placeholder="Email"
              //   ref={inputRef}
            />
          </div>
          <div>{formState.errors.email?.message}</div>
          <div>
            <S.LogInput
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <div>{formState.errors.password?.message}</div>
          <S.Sub onClick={onClickMovePage(`/signUp`)}>
            아직 회원이 아니신가요?
          </S.Sub>
          <S.LogButton>로그인</S.LogButton>
        </S.Inputs>
      </S.MainWrap>
    </S.LogWrap>
  );
}
