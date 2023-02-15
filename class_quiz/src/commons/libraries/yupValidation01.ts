import * as yup from "yup";

export const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5글자 이내 문자열입니다")
    .required("작성자를입력해주세요"),
  password: yup
    .string()
    .max(8, "8자 이내입니다")
    .matches(
      /(?=.*[a-zA-Z])(?=.*[0-9]).{1,8}/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이내입니다 "
    )
    .required("비밀번호는 필수형식입니다"),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 작성해주세요")
    .required("내용을 입력해주세요"),
  title: yup
    .string()
    .max(100, "제목은 100자 이내로 작성해 주세요")
    .required("제목을 입력해주세요"),
});
