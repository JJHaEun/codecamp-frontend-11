// import { useRouter } from "next/router";
import type { IUseditem } from "../../../../../commons/types/generated/types";

export const AddLocal = () => {
  // const router = useRouter();
  const onClickAddTodayAndMove = (TodayList: IUseditem) => () => {
    // void router.push(`/market/${TodayList._id}`);
    const newPageUrl = `/market/${TodayList._id}`;
    window.location.href = newPageUrl;
    const TodayLists: IUseditem[] = JSON.parse(
      localStorage.getItem("TodayLists") ?? "[]"
    );
    const temp = TodayLists.filter((el) => el._id === TodayList._id);
    if (temp.length >= 1) {
      return;
    }
    // const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 현재 시간 + 1시간
    // //
    // const TodayListWithExpirationTime = {
    //   //
    //   ...TodayList,
    //   expirationTime,
    // };
    // // 이 표시한것은 추가한부분. 일단 일정시간
    // TodayLists.unshift(TodayListWithExpirationTime); //
    // localStorage.setItem(
    //   "TodayLists",
    //   JSON.stringify(TodayListWithExpirationTime)
    // ); //
    TodayLists.unshift(TodayList);
    localStorage.setItem("TodayLists", JSON.stringify(TodayLists));
  };

  return {
    onClickAddTodayAndMove,
  };
};
