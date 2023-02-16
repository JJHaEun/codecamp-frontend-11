import { useState } from "react";

interface IUseCount {
  onClickCountUp: (num: number) => () => void;
  count: number;
}
// interface IUseCount{
//     onClickCountUp: () => void;
//     count: number;
// }

export const useCount = (): IUseCount => {
  const [count, setCount] = useState(0);

  const onClickCountUp = (num: number) => () => {
    setCount((prev) => prev + 1);
  };
  //   const onClickCountUp =  ():void => {
  //     setCount(prev=>prev+1);
  //   };
  return {
    onClickCountUp,
    count,
  };
};
