import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useState } from "../../section24/24-07-typscript-generic-use-state";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 게시글 등록하기 버튼이라고 가정.등록될때까지 버튼 block처리하기.즉, 한번 클릭햇을때 block
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true); // 원래 state는 일단 변경되면 임시저장공잔에 저장되다가 함수가끝나면 실행됨. 그런데 여기서도 바꾸고 아래에서도 바꾸었다??
    // 둘다 적용이되는데  이것은 await와의 관계..

    const result = await axios.get("https://koreanjson.com/posts/1"); // 마이크로큐에 들어가고 기다려야하니까 한텀으로 보고 이떼 함수가 쉬고 다시 실행됨
    console.log(result.data.content); // 제대로된 결과 받아옴  => { title : "...." , ... }
    console.log(result.data.title);

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={wrapAsync(onClickSync)} disabled={isSubmitting}>
        REST_API(동기) 요청하기
      </button>
    </div>
  );
}
