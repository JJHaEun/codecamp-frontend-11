import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyComponentPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
  }, []);

  const onClickCounter = (): void => {
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  }, [onClickCounter]);

  const onClickMove = (): void => {
    void router.push("/");
  };
  useEffect(() => {
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);
  console.log("마운트 시작");
  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
