import { MyEmail, MyEmailInput } from "../../../styles/01-02-emotion";
export default function EmotionPage() {
  // 여기는 자바스크립트 쓰는곳

  return (
    <div>
      <MyEmail>이메일: </MyEmail>
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <button>클릭하세요!!</button>
      <button>클릭하세요!!</button>
      <img src="/vercel.svg" />
      <img src="/vercel.svg" />
    </div>
  );
}
