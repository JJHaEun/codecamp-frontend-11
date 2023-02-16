import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

// 타입
interface IUseMoveToPageReturn {
  onClickMoveToPage: (url: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  // 객체!
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState); // 방문한 페이지 기록
  const onClickMoveToPage = (url: string) => () => {
    // 로컬에 담는 방법
    // localStorage.setItem("visitedPage",url) // 로컬스토리지도 가능

    // 글로벌 state => recoil에 담는 방법
    setVisitedPage(url); // 방문한 페이지들 글로벌스테이트에 저장해 어디서든 뽑아올 수 있게함.
    // 로그인 페이지일때는 set(저장)하지않도록 조건추가필요(글로벌 state에서 뽑아도되고 리턴한것 사용해도됨.)
    void router.push(url);
  };

  return {
    // onClickMoveToPage:onClickMoveToPage // key와 value같음=> value생략가능
    visitedPage,
    onClickMoveToPage, // 객체를 리턴하는것
  };
};

// 방문한 마지막 페이지를 저장하기(전역으로 적용되기에..)(로컬스토리지나 리코일(글로벌state에)... 결제 -> 로그인필요해 로그인페이지로 이동 -> 다시 이전페이지로 자동이동
