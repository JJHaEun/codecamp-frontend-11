// import { Observable } from "@apollo/client";
import { from } from "zen-observable";
export default function ObseverbleFlatmapPage(): JSX.Element {
  const onClickButton = (): void => {
    // new Promise((resolve, reject) => {});
    // new Observable((observer) => {});

    // fromPromise=> 프로미스를 옵져버블로 변경하는것, flatmap
    // zen-observable섪치하기
    from(["1번 Query", "2번 Query", "3번 Query"]) // 옵져버블로 변경하는것.(프로미스가 아닌것을..)
      .flatMap((el) => from([`${el} 결과에 qqq적용`, `${el} 결과에 zzz적용`])) // 각각의 결과를 flatMap을 통해 적용.
      .subscribe((el) => {
        // 받아온것 실행
        console.log(el);
      });
  };

  return (
    <>
      <button onClick={onClickButton}>클릭</button>
    </>
  );
}
