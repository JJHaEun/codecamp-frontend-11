import { useCallback, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트가 렌더링 되었습니다");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억하기 리렌더링 되어도 처음값이 유지됨.
  const aaa = useMemo(
    () => Math.random(),
    // 기억하고싶은 값을 {return  ~~~여기에 적어주면되는데 return 사이에 별 내용없으면 중괄호가 소괄호가 되고,
    // 이 소괗호도 생략가능}
    []
  );
  console.log(aaa);

  // 의존성배열이 잇다. => 해당 함수가 다시 실행된다. 의존성배열 안에값이 바뀔때 마다.

  // 2. useCallback으로 함수를 기억. useCallback(()=>{},[])
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1); // 값은 올라가나 리랜더링 없어 화면에는 반영안됨. document.getElementById로 해당태그 선택해서 바꿔줘야했음.
    countLet++; // countLet += 1 // countLet + 1
  }, []);

  // 3. useCallback사용시 주의 사항 =>state사용시 주의 필요
  //  ---> 함수를 기억하면서 state도 같이 기억하고있음.
  // 따라서 기존값에서 꺼내오는방법으로 사용하기
  const onClickCountState = useCallback((): void => {
    // setCountState(countState + 1); // 값바뀌면 리랜더링됨. use가 붙은것은 랜더링되어도 그 값을 기억하기에 이것빼고(다른곳에 저장되기때문에)
    // 나머지는 다시 실행이됨(기존 변수도 초기화)

    setCountState((prev) => prev + 1); // 이렇게되면 이전값꺼내서 계산됨 => 리랜더링됨.
  }, []);

  // 복잡한 계산로직등(오래걸리는것) 을 메모기능을 사용해 한번실행시 그 값을 저장해꺼내사용하기.(for문돌기 등...)
  // ==> 내 서비스 사용하는 사용자의 컴퓨터는 대부분 느리다! 라고 생각하고 만들기.

  // 4. useMemo로 나만의 useCallback만들어보기(함수안에 함수..)
  //   const onClickCountState2 = useMemo(() => {
  //     return (): void => {
  //       setCountState((prev) => prev + 1); // 이렇게되면 이전값꺼내서 계산됨 => 리랜더링됨.
  //     };
  //   }, []);

  return (
    <>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>
      <div>카운트(state):{countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      {/* 로직과 UI가 합쳐져 헷갈리.유지보수 어렵. 메모이제이션더 복잡함.       */}
      {/* <div>카운트(state):{countState}</div>
      <button
        onClick={useCallback((): void => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(state) +1 올리기
      </button> */}
    </>
  );
}
