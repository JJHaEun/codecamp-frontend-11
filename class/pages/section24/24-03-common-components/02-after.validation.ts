import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자를입력"),
  title: yup.string().required("제복를입력"),
  contents: yup.string().required("내용를입력"),
  // email: yup.string().email("이메일형식이 아닙니다").required("필수형식"),
  // password: yup
  //   .string()
  //   .min(4, "최소4자리이상")
  //   .max(15, "최대15")
  //   .required("필수"),
  // phone: yup
  //   .string()
  //   .matches(/^\d(3)-\d(3,4)-\d(4)$/, "번호형식이 잘못되었습니다."),
  // // 정규표현식은 그냥 매칭되는 문자열이 있늦지를 보는것이라 시작할때, 끝날때 이렇게 해야 맞는것이다 라고해서 앞에는(^) 뒤에는(&)를 써주어야한다
});
