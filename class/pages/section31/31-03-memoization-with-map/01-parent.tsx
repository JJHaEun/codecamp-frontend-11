import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationWithMapParentPage(): JSX.Element {
  const [data, setData] = useState("철수는 오늘 점심을 맛잇게 먹었습니다.");

  const onClickChange = (): void => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  }; // 변경된값만 리랜더링되게 만들기. 나머지는 유지.
  // 현재는 부모가 변경되면서 리렌더링되어 자식들도 다시 만들어짐.
  // 자식이 리랜더링안되게 자식을 메모.
  // 변경되는 props가 넘어가면 리랜더링 작동됨.(변경되는것이있으면 해당부분에대한 리랜더링이 작동된다.)
  //   다만 props로 넘기는 애등있으니 넘기는 애들중 ㅂ뀌는것만 리랜더.
  return (
    <>
      {/* {data.split(" ").map((el, i) => (
        <Word key={i} el={el} /> // 1. memo시 key또는 el이 변경된 부분만 리랜더링 됨.(즉, "오늘","먹었습니다"는 제외됨!!) (검색어 검색후, 모든것 split하여쪼갠후 색 바뀐부분만 리랜더링되는것에 활용할 수 있음.)
      ))} */}
      {data.split(" ").map((el, i) => (
        <Word key={uuidv4()} el={el} /> // 2. memo를 해도 key자체가 변경되어 props로 넘어가기에 모두 리랜더링됨.
      ))}
      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
