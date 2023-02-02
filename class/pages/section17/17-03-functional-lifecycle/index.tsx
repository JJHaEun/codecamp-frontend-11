import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// 리엑트 기능들을 상속받아옴!!

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // componentDidMount + componentDidUpdate와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행"); // 따라서 시작하자마자 위의것과 이거 실행됨
  });

  useEffect(() => {
    // componentWillUnmount와 동일. return안에서 실행됨
    return () => {
      console.log("사라지기전에 실행");
    };
  }, []);

  // 1. useEffect 하나로 합치기

  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라지기전에 실행");
    };
  });
  // 뒤에 들어있던 배열 => useEffect에서 배열이 없다면 뭘 할때마다 실행됨.
  // 배열 넣어주면 그 안의 값이 바뀔때만 재실행됨
  // 배열에 입력된 값이 변경되면 다시 실행되는것
  // 대괄호 자체가 없으면 감지할 게 없으니 뭐든 김지해 바뀌면 다시 실행됨
  // 대괄호에 아무값도 없다면 재실행할 것 없이 처음 한번만 실행됨
  // => 의존하고있는 배열 : dependency-array(의존성배열)

  // 2. useEffect의 잘못된 사용법

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    // use ~~ 는 훅 이라는 것으로 함수형 컴포넌트에서만 사용가능
    // 따라서 Router을 import해사용
    void router.push("/"); // 초기 화면으로
  };

  return (
    //    여기 부분이 화면에 보이는 presenter부분
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기!!</button>
    </>
  );
}
