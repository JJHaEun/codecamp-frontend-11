import { useCallback, useMemo, useState } from "react";
import MemoizationChildrenPage from "./children";

export default function MemoizationPage(): JSX.Element {
  let countUpLet = 0;
  const [countUp, setCountUp] = useState(0);
  const onClickCountUpLet = useMemo(
    () => (): void => {
      console.log("let:렌더링됩니다", countUpLet + 1);
      countUpLet++;
    },
    []
  );

  //   const onClickCountUpState =useMemo(() => {
  //   return (): void => {
  //     setCountUp((prev) => prev + 1);
  //   };
  // }, [])

  return (
    <>
      <span>{countUpLet}</span>
      <button onClick={onClickCountUpLet}>카운트 증가</button>
      <span>{countUp}</span>
      <button
        onClick={useMemo(() => {
          return (): void => {
            setCountUp((prev) => prev + 1);
          };
        }, [])}
      >
        카운트 증가
      </button>
      <MemoizationChildrenPage />
    </>
  );
}
