import * as yup from "yup";

export const usedItemSchema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  price: yup
    .number()
    .required("상품가격을 숫자로만 입력해주세요 (예시: 10000)")
    .transform((value) => (isNaN(value) ? undefined : value)),
  remarks: yup.string().required("상품 한줄요약을 적어주세요"),
  contents: yup.string().required("상품 상세설명을 적어주세요"),
});

// export const schema = yup.object({
//     email: yup
//       .string()
//       .email("이메일형식이 아닙니다")
//       .required("이메일을 입력해주세요"),
//     name: yup.string().required("이름을 입력해주세요"),
//     password: yup
//       .string()
//       .matches(
//         /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
//         "비밀번호는 영문,숫자, 특수문자를 포함해 최소 8자리이상이어야 합니다"
//       )
//       .required("비밀번호를 입력해주세요"),
//   });
