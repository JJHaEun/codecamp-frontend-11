import { useRouter } from "next/router";
import type { IUseditem } from "../../../../../commons/types/generated/types";

export const AddLocal = () => {
  const router = useRouter();
  const onClickAddTodayAndMove = (TodayList: IUseditem) => () => {
    void router.push(`/market/${TodayList._id}`);
    const TodayLists: IUseditem[] = JSON.parse(
      localStorage.getItem("TodayLists") ?? "[]"
    );
    const temp = TodayLists.filter((el) => el._id === TodayList._id);
    if (temp.length >= 1) {
      return;
    }
    TodayLists.push(TodayList);
    localStorage.setItem("TodayLists", JSON.stringify(TodayLists));
  };

  return {
    onClickAddTodayAndMove,
  };
};
