import { memo } from "react";

interface IWordProps {
  el: string;
}

function Word(props: IWordProps): JSX.Element {
  console.log("자식이 랜더링됩니다", props.el); // 맵으로 하나씩 뿌릴때마다 랜더링일어남.
  // 여기서! 같은것빼고 변경한것만 랜더링되게 만들어본다.
  return (
    <>
      <span>{props.el}</span>
    </>
  );
}

export default memo(Word);
